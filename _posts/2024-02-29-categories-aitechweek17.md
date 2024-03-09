---
title: "[AI Tech] 네이버 부스트 캠프 17주차 회고"
excerpt: "AI Tech Week 17"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week17/

toc: true
toc_sticky: true

date: 2024-02-29
last_modified_at: 2024-02-29
---

## 17주차 리마인드

이번주부터 기다리고 기다리던 Product Serving 강의가 시작되었다. 모델 프로덕션에 관심있던 내가 가장 기대하던 강의이기도 했다.
<br>강의는 Airflow를 활용한 batch-serving, FastAPI를 활용한 Online-serving, Docker, MLflow를 활용한 모델 관리 및 개발된 모델의 수명 주기를 관리로 구성되어있다.
<br>우리 팀은 이번주안에 최대한 강의를 수강하기로 계획을 세웠다. 따라서 나 역시 계획을 세워서 지금 시점인 목요일까지 2강을 제외한 나머지 강의를 전부 수강했다.
<br>이번주에 인상깊은 부분은 Airflow와 FastAPI이다. Airflow는 이전부터 사용해보고 싶은 tool중 하나였다. 해당 프레임워크를 통해 배치서빙 혹은 데이터 엔지니어링 분야에서 ETL 파이프라인 설계하여 주기적으로 스케줄링할때 사용하기 때문에 배워보고 싶었다.
<br>이번에 제공된 과제는 이러한 부분을 경험해볼 수 있었다. bashoperator와 pythonoperator를 활용하여 dags를 구성한 후 시간을 설정해준 후 web에서 확인해주면 되었다. 과제중에 데이터를 불러온 후 모델을 추론하여 이전에 학습된 모델들과 비교한는 과제가 있었다. 모델 불러온 후 추론하는 테스크 수행 후 비교하는 테스크에서 이전 테스크의 추론결과를 xcom으로 당겨오는게 인상 깊었다. 
<br>그리고 마지막 과제인 기상청 api를 활용해서 Airflow로 데이터를 요청해서 받고 전처리를 진행하여 주기적으로 처리하도록 설계해보는 것은 데이터 엔지니어링부분과 유사해서 재미있었다.


### 주간 회고
이번주도 정말 바빴다 ㅎㅎ. 마스터 클래스에서 전시흠 조교님의 쿠버네티스 미리보기 강의도 재미있었다. 쿠버네티스를 들어만 봤지 실제로 사용해보지 않아서 어떤것인지 궁금했다. 
<br>이번주 강의 듣고 과제하느라 시간이 순삭되었다. 과제가 재밌긴 했지만 시간이 좀 걸리는 과제들이라서 새벽까지 코딩하다 잔것 같다.(~~사실 Level2시작되고 나서 일상이다~~) 아무튼 FastAPI 과제를 열심히 해서 이번주에 강의를 끝내볼 예정이다.