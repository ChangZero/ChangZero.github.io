---
title: "[AI Tech] 네이버 부스트 캠프 19주차 회고"
excerpt: "AI Tech Week 19"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week19/

toc: true
toc_sticky: true

date: 2024-03-15
last_modified_at: 2024-03-15
---

## 19주차 리마인드

이번주는 데이터 수집 및 데이터 파이프라인 구축 위주로 프로젝트를 진행했다.<br>
전자기기 특가 C사이트에서 제공해주는 상품정보조회 API와 유저정보조회 API를 활용해서 파이썬 스크립트로 Data_generator라는 코드를 작성해서 데이터수집을 했다.<br>
수집이 완료되면 GCS에 업로드된다. 데이터를 처리할 수 있는 파이프라인을 구축하기 위해 Google Cloud Composer를 세팅했다.<br>
GCP의 Airflow로 Dag를 설계해서 수집한 데이터를 처리할 수 있는 ELT 파이프라인을 구축했다.<br>
ELT 파이프라인을 통해 GCS에 업로드된 데이터를 Google BigQuery에 적재할 수 있게 설계했다.<br>
GCP Composer를 활용해서 ELT파이프라인을 구축해서 좋은 경험이었다. 다만... 너무 비싸다. ㅎㅎ<br>
5일정도 사용했는데 6마넌이 증발했다...<br>

데이터를 수집하고 수집한 데이터가 정제되어있지 않았기 때문에 원시 데이터(Data Lake)에서 변형 및 필요한 데이터를 추출해서 데이터 마트를 구축했다.<br>
Nginx에서 추출된 로그 데이터이기 때문에 데이터가 많이 지저분했다. 데이터 전처리하는데 남은 한주를 다 쏟은 것 같다.<br>
다음주에는 해당 데이터를 활용해서 모델링을 좀 진행해보고 싶다.