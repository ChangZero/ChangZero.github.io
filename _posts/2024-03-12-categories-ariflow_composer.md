---
title: "[AI Tech] GCP Composer로 Airflow 활용하기"
excerpt: "AI Tech GCP Composer"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/airflow_composer/

toc: true
toc_sticky: true

date: 2024-03-13
last_modified_at: 2024-03-22
---

# 1. GCP Composer 세팅

### 1. Composer 생성


<img width="896" alt="1-2" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/d27c511a-a67b-4af9-9812-1b624c9b3718">
GCP 콘솔로 이동해서 Composer2 생성을 해준다.
<img width="470" alt="4" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/8713c0f4-4a98-4d72-851d-442cd4f0b27e">


다음과 같이 세팅을 해주고 필요하면 권한 설정을 해준다.
<img width="674" alt="3" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/3f06190e-c50f-405d-98c8-7a9a0595840f">
추가적으로 IAM 설정으로 들어가서 Composer 서비스 계정에 역할을 추가적으로 지정해줘야한다.


<img width="469" alt="6" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/640eb98c-0687-420a-bd7e-d808e925e7ad">

추가적으로 주어야하는 권한은 

- BigQuery 사용자
- Cloud Composer v2 API 서비스 에이전트 확장 프로그램
- Composer 관리자
- Composer 작업자
- Dataproc 작업자
- Dataproc 편집자

등등… 자세한 내용은 해당 링크 참고 

[IAM으로 액세스 제어  |  Cloud Composer  |  Google Cloud](https://cloud.google.com/composer/docs/how-to/access-control?hl=ko)

- 이걸 설정 안하면…
요런 에러를 볼수 있다.
<img width="1304" alt="5" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/c88b9846-0404-4187-a107-efd0d584a430">


    

# 2. DAGs 생성

코드는 강의에서 배운 것과 유사함

- 샘플 DAGs 코드
    
    ```python
    from airflow import DAG
    from datetime import datetime, timedelta
    from pathlib import Path
    from airflow.providers.google.cloud.transfers.gcs_to_bigquery import GCSToBigQueryOperator # GCS 데이터를 BigQuery로 옮김
    from airflow.providers.google.cloud.operators.bigquery import BigQueryExecuteQueryOperator # BigQuery에서 Query를 실행
    from airflow.providers.google.cloud.transfers.local_to_gcs import LocalFilesystemToGCSOperator # Local에서 GCS로 데이터를 옮김
    
    PROJECT_ID = "level3-416207" # 프로젝트 ID
    BUCKET_NAME = "level3_recsys02" # 업로드할 GCS Bucket
    FILE_NAME = "users_device_info.csv" 
    LOCAL_FILE_PATH = str(Path(__file__).parent.parent / "data" / FILE_NAME) # Composer와 연결된 GCS의 경로
    
    GCS_PATH = f"user_info/users_device_info.csv" # 업로드할 GCS(BigQuert와 연결된)의 경로
    
    default_args = {
        "owner": "czero",
        "depends_on_past": False,
        "start_date": datetime(2024, 3, 7),
        "end_date": datetime(2024, 3, 12)
    }
    
    # GCS에서 BigQuery에 적재하기전 스키마 설정 
    schema_fields = [
      {
        "mode": "NULLABLE",
        "name": "id",
        "type": "STRING"
      },
      {
        "mode": "NULLABLE",
        "name": "keywords",
        "type": "STRING"
      },
      {
        "mode": "NULLABLE",
        "name": "favorite_ids",
        "type": "STRING"
      },
    ]
    
    with DAG(
        dag_id="elt-users_info",
        default_args=default_args,
        schedule_interval="30 0 * * *",
        tags=["user"],
        catchup=True
    ) as dag:
        
        # 1) Extract : Local To GCS
        extract_data = LocalFilesystemToGCSOperator(
            task_id="extract_data",
            src=LOCAL_FILE_PATH,
            dst=GCS_PATH,
            bucket=BUCKET_NAME
        )
        
        # 2) Load : GCS To BigQuery
        load_csv = GCSToBigQueryOperator(
            task_id="gcs_to_bigquery",
            bucket=BUCKET_NAME,
            source_objects=[GCS_PATH],
            destination_project_dataset_table=f"{PROJECT_ID}.log_129.user_device", # from GCS to BigQuery 
            schema_fields=schema_fields,
            source_format='CSV',
            skip_leading_rows=1,
            create_disposition="CREATE_IF_NEEDED",
            write_disposition="WRITE_TRUNCATE",
            location="US"
        )
        
        # 3) Transform : BigQuery에서 Query 실행해서 다시 BigQuery에 저장
        sql_query = f"""
        SELECT
          *
        FROM `{PROJECT_ID}.log_129.user_device`
        WHERE keywords IS NOT NULL
        AND favorite_ids IS NOT NULL;
        """
        transform = BigQueryExecuteQueryOperator(
            task_id="run_query",
            sql=sql_query,
            use_legacy_sql=False,
            allow_large_results=True,
            write_disposition="WRITE_TRUNCATE",
            destination_dataset_table=f"{PROJECT_ID}.log_129.user_device_notNULL"
        )
    
        extract_data >> load_csv >> transform
    ```
    

다만 주의해야 할 점은 
GCS에서 BigQuery로 적재할 때 데이터셋이 사전에 생성되어있는지 확인해주어야한다.
테이블을 없으면 생성해주지만, 데이터셋은 그렇지 않는 것 같다. ㅎㅎ(~~이것 땜에 몇시간 날림~~)

# 3. 데이터 및 DAGs 업로드

Composer를 생성하면 Composer와 연결된 GCS가 다음과 같이 별도로 생성된다. 

<img width="594" alt="7" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/1e2dfd98-4e0f-431d-8df7-c3f764aef46e">

1) 데이터 업로드

<img width="744" alt="8" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/11bc7c1e-bfa0-4075-b4ba-f09de67318dd">

해당 GCS에는 data, dags등을 업로드 할 수 있다. 내가 사용할 데이터를 data 폴더에 업로드해준다.

2) DAGs 업로드

<img width="792" alt="9" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/d98821e1-886c-416e-8f9b-a20c0550d6c4">

작성한 DAG 파일을 업로드 해 줄 차례이다. dags 폴더에 업로드해준다.

# 4. Airflow Web Server 접속 및 확인

<img width="880" alt="11" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/784c7f2f-5eac-48b0-b546-acd229df9f5f">


<img width="932" alt="12" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/14510de2-9b61-4888-92db-62dbd12ea6eb">

Airflow Web Server로 이동하면 다음과 같이 배치단위로 실행되는 것을 확인할 수 있다.

BigQuery에 접속해서 테이블이 생성된 것을 확인하면 끝~~!

<img width="609" alt="13" src="https://github.com/ChangZero/ChangZero.github.io/assets/97018869/7a813aad-1d07-4211-b23f-23b9b72fbde3">

## 참고자료

네부캠 Product Serving 클라우드 서비스 실습

GCP Composer2 Guide

[Cloud Composer 개요  |  Google Cloud](https://cloud.google.com/composer/docs/composer-2/composer-overview?hl=ko)