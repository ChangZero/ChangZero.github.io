---
title: "[AI Tech] 네이버 부스트 캠프 10주차 회고"
excerpt: "AI Tech Week 10"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week10/

toc: true
toc_sticky: true

date: 2024-01-12
last_modified_at: 2024-01-12
---

## 10주차 강의 리마인드

### 강의 리마인드
DKT대회가 시작된지 2주차가 되었다. 지난주 우리팀은 강의를 지난 주말까지 다 듣고 미션 코드를 분석해서 설명해주기로 약속했었다. 따라서 주말내내 강의를 들었다 ㅎㅎ. 주말동안 그래프를 통한 추천시스템에 대한 강의를 들었다. 
추천시스템의 트랜드는 Apriori -> CF(memory based) -> CF(model based)/ MF ->  Factorization Machine -> item2Vec + CF -> Wide &Deep model -> NCF/DeepFM -> Sequential-Based/ Seccsion-Based -> GNN 순으로 진행된다고 수업에서 간략하게 언급된다. 
GNN은 추천시스템에서 각광받는 방법론 중 하나이다. 그 이유는 소셜 네트워크와 같은 Graph domain은 유클리디언 공간이 아니기 때문에 거리 자체가 중요한게 아니라 관계성이 중요하다. 따라서 그래프 형태로 표현하여 학습하는 그래프 뉴렬 네트워크가 부상했다.특히 그래프에 컨볼루션 연산을 수행하는 GCN이 등장했다.<br>
GCN은 데이터를 그래프형태로 바꿔주는 단계 -> 그래프 데이터 특징에 적합한 구조 NN 구조 -> Task 해결(Graph-level, Edge-level, Node-level) 순으로 진행된다. GCN의 목적은 주변 노드의 정보를 통해 자신의 정보를 hidden representation으로 만들 수 있는 필터를 찾는 것이다.
A(adjacenecy matrix) 와 H(Node-feature matrix)와 W(Learnable parameter)의 컨볼루션이 진행된다. 이후 나온 방법론이 GNN과 Transformer를 결합한 GAT이다. <br>
GAT는 Adj Matrix를 사용하지 않는다. 그 대신 spatial한 방법을 사용한다. GCN는 가중치가 모두 동일하지만, GAT는 노드별 가중치가 상이하다. Aggregate(Message passing)과 Combine(Update)이 순차적으로 반복되며, 최종적으로 Readout(for graph-level task)을 통해 output이 도출된다.


## 회고
새로운 팀원들과 새로운 규칙 속에서 프로젝트를 진행한지 2주차가 지났다. 좋은 팀원들을 만나 작업 진행이 순조로운?것 같다. 우리팀은 이번주동안은 피처엔지니어링에 초점을 맞추어 다양한 EDA와 전처리를 진행하기로 했다. 지난주에 깃헙을 활용한 이슈기반 협업과 깃 프로젝트 간반보드를 활용한 일정관리를 팀에 제안했는데 팀원들과 호흡을 맞춰서 프로젝트를 진행하는게 슬슬 체감된다. 이러한 협업 방식이 처음인 팀원들이 있어서 노션에 간단하게 어떤식으로 협업하는지 가이드라인을 작성해서 공유했는데 도움이 되었을지 모르겠다 ㅠㅠ. 나는 EDA와 피처엔지니어링도 조금씩하면서 피처엔지니어링 한 것을 바로 모델에 태울 수 있도록 학습 베이스라인 코드와 파이프라인을 구축하는데 초점을 맞췄다. WandB Sweep을 통해 하이퍼파라미터 최적화도 진행할 수 있도록 설정을 해두었다. 다음주에는 이어서 작업하던 Tree기반 모델과 Tabnet적용을 마무리 지을 것이다. 주말동안에는 피어세션때 이야기가 나온 EDA를 진행하여 피처엔지니어링 코드를 PR할 것이다.