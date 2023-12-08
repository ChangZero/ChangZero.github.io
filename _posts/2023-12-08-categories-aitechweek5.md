---
title: "[AI Tech] 네이버 부스트 캠프 4주차 회고"
excerpt: "AI Tech Week 5"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week4/

toc: true
toc_sticky: true

date: 2023-12-08
last_modified_at: 2023-12-08
---

## 5주차 강의 리마인드
이번주차는 지난주에 이어 Recsys 기초 이론에 대한 강의를 이어서 진행했다.<br>
그래프 신경망(GNN)과 순환 신경망(RNN)을 활용한 추천 시스템 모델에 대한 강의가 제공되었다. 

### 그래프 신경망
그래프를 추천 시스템에 사용하는 이유는 관계, 상호작용과 같은 추상적인 개념을 다룰 수 있으며, 이미지, 텍스트와 같은 Non-Euclidean space의 표현이 가능하다는 장점이 있어서다. 그래프를 활용한 대표적인 추천 시스템인 Neural Graph Collaborative Filtering(NGCF)와 LightGCN에 대해 공부했다. NGCF는 기존 CF의 모델의 한계점인 유저-아이템의 상호 작용을 임베딩 단계에서 접근하지 못하는 단점을 해결하는 모델이다. 따라서 Coolaborative Siganl 즉 GNN 구조를 통해 유저-아이템의 상호작용이 임베딩 단에서부터 학습될 수 있도록 설계되었다. <br>
LightGCN은 GCN(Graph Collaborative Filtering)의 핵심적인 부분만을 사용하여, NGCF보다 더 정확하고 가벼운 추천시스템이다. 
핵심 아이디어는 Lgith Graph Convolution으로 이웃 노드의 임베딩을 가중합한다. 


## 피어세션
이고잉님의 깃헙 특강이 이어서 진행되었다. 이번에는 저번보다 심화된 내용에 대해 설명해주셨다. <br>
깃 충돌과 rebase, cherry-pick, revert에 대한 이론 설명도 해주셔서 새로운 개념에 대해서 배울 수 있는 좋은 시간이었다.<br>
이번주 팀 피어세션에서는 팀원분이 트랜스포머의 YouTube 추천 시스템에 대한 설명을 해주셨는데 팀원들과 함께 오랜시간 찾아보고 서로 이해한게 맞는지 확인하는 시간을 가졌다.
금요일에는 구인구팀데이가 역삼역 네이버 스퀘어에서 열렸다. 처음보는 부캠퍼분들과 서로의 관심사와 어떤 프로젝트를 했는지 물어보는 기회였다. 

## 회고
이번주는 지난주에 이어서 추천시스템에 대해 공부하는 시간이었다. 오늘 만나서 이야기한 부캠퍼분들과 어떤 분야에 흥미있는지 알 수 있어서 좋은 기회였다.

