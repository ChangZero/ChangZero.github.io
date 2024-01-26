---
title: "[AI Tech] 네이버 부스트 캠프 11주차 회고"
excerpt: "AI Tech Week 11"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week11/

toc: true
toc_sticky: true

date: 2024-01-19
last_modified_at: 2024-01-19
---

## 11주차 강의 리마인드

### 강의 리마인드
DKT대회가 시작된지 3주차가 되었다. 이번주차 강의는 Industrial Recsys 수업을 들었다. 이번 주차에서는 실제 현업에서 추천시스템을 개발할 시 고려해야할 것들에 대해 배웠다. 


## 회고
새로운 팀원들과 새로운 규칙 속에서 프로젝트를 진행한지 3주차가 지났다. 정형 데이터 학습을 위한 베이스라인을 작성해서 깃에 올렸다. <br> 
python 스크립트 실행 시 입력 받는 인자와 WandB sweep 인자를 구분하여 관리 할 수 있도록 설계했다. 즉 데이터 경로, 모델 저장 경로, 저장 파일 저장 경로와 같이 모델과 관련없는 인자와 모델학습과 관련된 인자를 구분하여 구분하게 설계해줬다. 그 외 시험-유저별 시험시간을 시각화해서 해당 부분을 팀원들과 공유했다. 또한 KnowledgeTag를 Binnin해서 평균값으로 인코딩 후 학습을 진행했는데 성능이 좋지 않았다. ㅎㅎ. 모델링 관련해서는 LGBM 베이스라인을 개발했다. 또한 TabNet 베이스라인을 개발했다. 안타깝게도 TabNet의 성능이 생각보다 좋지 않았다. 생각보다 과적합이 심했다. 또한 값이 수렴하는 것 같아서 learning rate와 weight decay를 조정해서 학습을 다시 시도해볼 계획이다. 물론 K-fold도 적용해볼 것이다.