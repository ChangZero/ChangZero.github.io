---
title: "[AI Tech] 네이버 부스트 캠프 7주차 회고"
excerpt: "AI Tech Week 7"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week7/

toc: true
toc_sticky: true

date: 2023-12-22
last_modified_at: 2023-12-23
---

## 7주차 강의 리마인드

### 강의 리마인드

추천 시스템 개론, Content Based Recommender System & Memory Based Collaborative Filtering, Model Based Collaborative Filtering, Recommender System with Context-Aware & Deep Learning에 대한 리마인드 강의를 수강했다.<br>
라이브러리를 활용한 Recommender System에 대한 강의가 제공되었다. <br>
Kakao ARENA Recommender System Competition, Kaggle H&M Personalized Fashion Recommendation에서 수상한 추천시스템 솔루션에 대한 소개 및 설명이 있었다.
비정형 데이터를 활용한 Recommender System에 대한 강의를 통해 이미지 데이터와 정형 데이터를 활용하는 멀티 모달 추천시스템, 텍스트 데이터와 정형 데이터를 활용하는 멀티 모달 추천시스템에 대해 공부를 했다.
Advanced Recommender System에서는 강화학습을 활용한 추천시스템에 대해 공부를 했다.

### 도메인 기초 대회 관련 회고

우리팀은 깃허브를 적극적으로 활용해서 협업하기로 했었는데 해당 부분이 제대로 이루어진거 같아 너무 뿌듯했다. ㅎㅎ<br>
이슈 기반으로 작업을 진행했으며, 문제 사항 혹은 앞으로 할 일을 이슈로 등록해서 해당 이슈 기반으로 브랜치를 생성해서 작업 후 PR하는 식으로 프로젝트가 진행되었다. <br>
데일리 스크럼과 피어세션때 올라온 PR들에 대한 코드 리뷰 후 병합하는 과정을 거쳤다. 코드 리뷰에서는 PR 올린 사람이 본인 화면 및 코드를 공유해서 설명을 진행했다. 이후 팀원들의 질의 응답 후 이상이 없으면 병합을 하였다. 처음에는 병합하는 과정에서 충돌이 발생해서 어려움을 겪었었다. 하지만 깃 특강 시간에 이고잉님께서 말씀하시길 '모르면 에러 알면 기능이다.' 익숙해지니깐 충돌에 대한 대처도 늘었다 ㅎㅎ. <br>
이번주에는 지난주에 진행중이던 WandB의 sweep 기능을 활용해서 하이퍼파라미터 최적화를 진행할 수 있는 기능을 구현했다. 팀원들이 WandB를 활용해서 실험관리를 하고 최적화를 진행하니깐 정말 뿌듯했다 😃😃.<br>
모델 관련해서는 지난주부터 맡아서 진행했던 NCF 모델을 고도화하는 방식으로 진행했다. 기존 NCF모델은 유저와 아이템 정보만을 활용하다보니 데이터가 가진 희소성으로 인해 과적합되는 경향을 보였다. 따라서 이부분을 해결하기 위해 컨텍스트 정보를 같이 입력으로 주는 방식을 도입했으며, 다양한 방식으로 모델을 수정해서 실험을 해보았다. 
- cNCF: Context 정보를 활용하기 위해 MLP에 입력으로 추가
- cNCF-v2: Context 정보를 MLP에 입력으로 주고 MLP의 출력과 GMF, context latent factor를 concat
- cNCF-v3: Context 정보를 GMF와 MLP의 입력으로 활용

모델을 다음과 같이 여러 버전으로 수정해서 학습을 진행했을때 기존 NCF보다 성능이 향상되는 것을 확인했으며, 컨텍스트 정보를 많이 활용할수록 Train과 Valid의 간격이 좁아지는 겻을 확인했다. 최종적으로 내가 만든 cNCF모델과 FFM, CatBoost1, CatBoost2를 앙상블한 결과가 성능이 가장 좋게 나왔다.



## 회고
이번주는 역시 정말 바쁜 하루였다. 도메인 기초 대회, 깃 특강 2탄, 강의 듣기, 발표 자료 준비(우리조가 마스터님 앞에서 발표를 하게되었다??!!!?) 등등... <br>
바쁘지만 정말 재밌고 의미있는 한 주였다 ㅋㅋ. 특히 WandB 관련해서 노션에 정리 후 부캠 슬랙 커뮤니티에 공유했는데 해당 글이 무수한?? 따봉을 받아서 정말 감동받았었다. ㅎㅎ. 
<figure>
<img src = "https://github.com/ChangZero/ChangZero.github.io/assets/97018869/cd29bd65-c69e-4371-bb74-a0c68135067c" width = "900" height = "500" alt="WandB를 활용한 실험관리 내용 공유">  
</figure>

<figure>
<img src = "https://github.com/ChangZero/ChangZero.github.io/assets/97018869/ae0d764b-da3c-4b2c-84b8-f0446be38c5b" width = "900" height = "500" alt="WandB를 활용한 하이퍼 파라미터 최적화 내용 공유">  
</figure>

더불어 NCF 모델관련해서 해당 모델이 내가 가진 데이터에서 어떤 문제점을 가지고 있는지 파악해서 부족한 부분을 해결하기 위해 모델 아키텍처를 수정해서 성능을 끌어올린 부분이 만족스러웠다. 물론 아쉬운 부분도 있었다. 데이터 전처리가 가장 중요하다는 것은 알고 있어지만, 시간이 부족하다보니 전처리에 대해 신경을 많이 못썼다. 아마 더 좋은 전처리와 다양한 전처리를 했다면 성능도 더 좋아졌을 것이다. <br>
다음에 있을 대회에서는 팀원들과 전처리에 대해 좀 더 싶은 대화를 해 볼 생각이다. 또한 커뮤니티에 좋은 자료, 인사이트가 생기면 정리해서 꾸준히 올려볼 생각이다.