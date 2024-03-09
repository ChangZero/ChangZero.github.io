---
title: "[AI Tech] 네이버 부스트 캠프 18주차 회고"
excerpt: "AI Tech Week 18"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week18/

toc: true
toc_sticky: true

date: 2024-03-10
last_modified_at: 2024-03-10
---

## 18주차 리마인드

이번주도 프로젝트 진행하느라 정말 바빴다.(~~주말동안 FastAPI 과제한다고 못 쉼 ㅎㅎ~~)<br>
지난주에 진행된 강의 다시보기와 교안을 참고해서 네이버 클라우드 서버를 세팅했다. SSH 설정과 user생성을 마무리해주고 미니콘다와 도커를 이어서 설치해주었다.
물론 서버 세팅하는데 몇가지 이슈가 있긴 했다. 강의자료대로 했는데 아무리 접속을 해도 팅기는 문제가 있었다. 인터넷에 열심히 서칭한 결과...
문제는 바로 우리집 인터넷이었다.!!!

![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/d05f78fc-1258-4213-97b5-559b5f4328fb)

현재 필자는 인터넷으로 sk브로드밴드를 사용하고 있다. 허나 sk브로드밴드에서는 네이버 클라우드(다른 서버도 동일)의 SSH 디폴트 포트인 22번을 막는다고 한다. <br>
[참고 링크](https://velog.io/@zuckerfrei/SK-%EB%B8%8C%EB%A1%9C%EB%93%9C%EB%B0%B4%EB%93%9C-%EC%A0%91%EC%86%8D-%EC%A0%9C%ED%95%9C-%ED%8F%AC%ED%8A%B8)<br>
해당 문제를 모르고 3시간을 허비했다 ㅎㅎ. 눈물이 쏟아져 나온다. 따라서 해당 문제를 해결하기 위해 서버 콘솔로 서버에 접속해서 ssh port를 2222로 변경해주었다.<br>
ssh 포트를 접속하고 ACG설정에서 IP와 2222번 포트 등록을 해주니 접속이 잘되었다.!<br>
우리팀은 마스터 노드를 통해 MLflow와 FastAPI로 서빙할 수 있는 API를 띄우기로 했기때문에 워커노드와 내부통신을 할 수 있도록 서버 생성때부터 서브넷 설정을 해주었다.
네이버 클라우드서 제공해주는 서버의 용량이 50G이기 때문에 MLflow 백엔드 DB는 워커노드 중 하나인 내가 사용하는 서버에서 띄우기로 했다. <br>
MLflow 백엔드 DB로는 postgreSQL을 사용하기로 했으며, 워커노드에 postgreSQL 도커를 띄우고 마스터 노드에서 python 3.9-slim 이미지에 mlflow를 설치하여 도커를 띄웠다. 마키나락스에서 배포한 [MLOps for MLE](https://mlops-for-mle.github.io/tutorial/)를 참고해서 진행을 했다. 팀원들과 몇번의 시도 끝에 무사히 연동되는 것을 확인 할 수 있었다!!!<br>
MLflow 대시보드 화면은 다음과 같다!! 

![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/d98f8a57-7efe-45f8-b7cc-bd433b7c4bcf)

워커노드에서 실험한 결과들이 마스터 노드로 잘 넘어가는 것을 확인 할 수 있다. 물론 MLflow DB는 다른 워커 노드에 있기때문에 모델 파라미터는 postgreSQL에 저장된다. 

현재 구축된 인프라 상황을 간단하게 그리면 

![진행상황](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/74c7c68f-c86d-477a-abd1-3ca0acf1632c)
내부 IP 기준 마스터 노드인 10.0.1.6에 MLflow를 띄우고 워커노드 중 하나인 10.0.1.7에 MLflow DB인 postgreSQL을 띄워서 연동을 시킨 상태이다. <br>
각 워커노드에서 진행되는 학습들은 MLflow로 전송되는 구조이다.

이후 서버가 세팅되었기 때문에 구글 클라우드 플랫폼 무료 크래딧을 활용하여 데이터웨어하우스를 구축했다. Google Cloud Storage에 버킷을 하나 생성한 후 제공받은 Nginx 로그 파일을 올려주었다. 추가적으로 상품조회, 유저조회API를 호출하여 수집한 정보들 또한 Storage에 업로드 해주었다. 이후 Google Big Query를 활용해서 데이터 웨어하우스를 구축해주었다. 

정말 바쁜 한 주였다. 시간이 느리게 흘러간 것 같다. 이제 슬슬 모델링에 들아가야할 것 같다.