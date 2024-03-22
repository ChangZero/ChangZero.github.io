---
title: "[AI Tech] 네이버 부스트 캠프 20주차 회고"
excerpt: "AI Tech Week 20"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week20/

toc: true
toc_sticky: true

date: 2024-03-22
last_modified_at: 2024-03-22
---

## 20주차 리마인드

ELT 파이프라이을 만들고 중간발표자료 만들기에 집중했다.<br>
각자 역할을 나눠서 발표자료를 만들었다. 나는 서비스 아키텍처 위주로 글을 작성했다.<br>
우리팀의 서비스 아키텍처는 다음과 같다. (~~저거 만드느라 힘들었다. ㅠㅠ~~ 마키나락스 MLE for MLOps를 참고했다.)

![아키텍처](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/f6faaaf5-e011-4516-a982-f1bd7a40072d)

서비스는 네이버 클라우드 플랫폼과 구글 클라우드 플랫폼에서 동작하며, 데이터 생성기에서 크롤노티 측에게 제공받은 Nginx Log 및  API를 통해 수집된 유저, 상품 정보가 Google Cloud Storage에 업로드 된다.<br>

Google Cloud Composer의 Airflow를 통해 ELT 파이프라인을 구축하여 배치단위로 빅쿼리에 적재되도록 설계했다.<br>

구축된 데이터웨어하우스에서 데이터를 불러와 학습을 진행한다.<br>

각 워커 노드에서 학습된 모델들은 마스터 노드에 띄워진 MLflow 서버에 로깅되며, 실험 결과는 Postgre 서버에 저장된다. <br>

최종적으로 FastAPI로 구축된 API Server를 통해 
학습된 모델이 서빙되는 구조로 설계되었다.<br>

추가적으로 이번주에 MinIO를 MLflow에 연결해서 아티펙트가 Storage에 MinIO 스토리지에 저장되게 만들어주었다.<br>
지금 시점에선 FastAPI를 띄우기만 하고 서빙 API는 구현하지 않았다. 이번주 주말에 틈틈히 만들어야한다.ㅠㅠ<br>
postgreSQL을 왜 워커노드에 띄웠는지 궁금해 할 수 있는데 이유는 단순하다. 마스터 노드 서버 용량이 넉넉하지 않다.ㅋ<br>
네이버 커넥트 재단에서 클라우드 서버 제공해준것까지는 감사했는다. ~~이왕이면 용량 큰걸루...~~

사실 이번주도 정말 바쁜 하루였다. 요 몇주간 항상 바빴다.ㅠㅠ<br>
상반기 채용시장이 열리면서 하루에 자소서1개씩 작성하다보니 시간이 걍 삭제된다.<br>
최종프로젝트하느라 코딩테스트 준비가 소홀해졌다. ㅋㅋ 큰일났다. <br>
이제 서류 전형끝나가니 인적성도 준비해야하는데 할게 태산이다.

![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/5be9fc0a-1199-4ce9-87b3-3750dcfb6ecb)

사실... 클로킹모드 켜고 남은 프로젝트 기간 살짝 묻어가려는 마인드도 있었다.(~~쳐 죽일 넘 죽어 그냥~~)<br>
내가 홀로 진행중인 유저디바이스 등록된 유저 개인화 추천도 살짝 묻었는데... MLOps아키텍처 구축하는거랑 API 설계하는 부분에서 붙잡혀 버렸다.(~~난 분명 맡아서 한다는 이야기도 안했는데 자연스럽게 맡게됨???ㅋ~~)<br>

![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/769aeb25-a253-4d0b-8d2b-c3f34ace5deb)

사실 만드는 건 상관없다. 그렇게 고도화된 API만드는 것도 아니고 기능 구현이라..ㅎ
MLOps 아키텍처 구축은 얼추 끝났는데 API 주말에 만들러 가야한다. 만드는건 어렵지 않아서 토요일날 네이버 코테 끝나고 후딱 설계해서 자소서작성하러 가야했다 ㅎㅎ