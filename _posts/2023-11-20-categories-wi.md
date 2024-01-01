---
title: "가중치 초기화 왜 해야하는거야?"
excerpt: "가중치 초기화에 대해 공부해보자"

categories:
  - boostcamp
tags:
  - [boostcamp, weights-initializaion]

permalink: /boostcamp/wi/

toc: true
toc_sticky: true

date: 2023-11-20
last_modified_at: 2023-11-20
---

신경망 학습 시 손실 함수의 시작 위치에 따라 최적해 값 혹은 도달 시간이 달라진다.

→ 손실 함수에서 시작 위치를 결정하는 것 = 가중치 초기화

> 가중치 초기화가 왜 중요할까?

1. 그래디언트 소실 및 폭발 문제
초기에 가중치를 너무 작게 또는 크게 설정하면, 역전파 도중 그래디언트가 너무 작아지거나 커지는 문제가 발생할 수 있다. 이는 모델이 학습을 제대로 수행하지 못하게 만들 수 있습니다. Xavier 또는 He 초기화와 같은 초기화 기법은 이러한 그래디언트 관련 문제를 완화합니다.
2. 학습 속도 향상
초기 가중치가 잘 설정되면, 모델은 더 빠르게 수렴하고 높은 정확도로 학습할 수 있다.
+ 초기 가중치가 잘못 설정되면, gloablminium으로 수렴하기가 어려워 진다.
3. 모델 일반화 향상
좋은 가중치 초기화는 모델의 일반화 능력을 향상시킬 수 있습니다. 이는 새로운 데이터에 대한 모델의 성능을 개선하는 데 도움이 됩니다.
4. Symmetry 문제 방지
모든 가중치를 동일하게 초기화하면 각 뉴런이 동일한 그래디언트를 받게 되어 뉴런 사이의 대칭 문제가 발생할 수 있습니다. 적절한 가중치 초기화는 이러한 대칭성 문제를 방지

가중치 초기화 방법

1. **제로 초기화 (Zero Initialization):**
    - 가장 간단한 초기화 방법 중 하나입니다.
    - 모든 가중치를 0으로 초기화합니다. 이 방법은 네트워크를 학습하는 데 효과적이지 않다. 가중치가 동일하므로 역전파 중에 동일한 그래디언트를 받게 되어 가중치가 갱신되지 않습니다.
2. **랜덤 초기화 (Random Initialization):**
    - 가중치를 작은 랜덤한 값으로 초기화합니다.
    - 대표적으로 작은 표준편차를 가지는 정규 분포나 균등 분포에서 랜덤한 값을 선택하여 초기화합니다.
    - 예시: **`torch.nn.init.normal_`**, **`torch.nn.init.uniform_`**
3. **Xavier 초기화 (Glorot 초기화):**
    - **Sigmoid**나 **Hyperbolic Tangent (tanh)** 활성화 함수를 사용하는 경우에 효과적입니다.
    특히 활성화 함수가 선형 함수이거나, **sigmoid, tanh**와 같이 중심 부근이 선형적인 함수를 사용할 때 효과적이다.
    - *n_*in은 입력 뉴런 수, *n_*out은 출력 뉴런 수
        - normal일 경우
            {% raw %}
            $$ \text{Var}(W) = \pm \sqrt{\frac{2}{{n_{\text{in}} + n_{\text{out}}}}} $$
            {% endraw %}


        - Uniform일 경우
            {% raw %}
            $$
            W \sim U\left(-\sqrt{\frac{6}{{n_{\text{in}} + n_{\text{out}}}}}, +\sqrt{\frac{6}{{n_{\text{in}} + n_{\text{out}}}}}\right)
            $$
            {% endraw %}

    - 예시: **`torch.nn.init.xavier_uniform_`**, **`torch.nn.init.xavier_normal_`**
4. **He 초기화:**
    - **ReLU** 활성화 함수를 사용하는 경우에 효과적입니다.
    - *n_*in은 입력 뉴런 수
        - normal일 경우
            {% raw %}
            $$
            \pm \sqrt{\frac{2}{{n_{\text{in}}}}}
            $$
            {% endraw %}
            
        - Uniform일 경우
            {% raw %}
            $$
            W \sim U\left(-\sqrt{\frac{6}{n_{\text{in}}}}, +\sqrt{\frac{6}{n_{\text{in}}}}\right)
            $$
            {% endraw %}
        
    - 예시: **`torch.nn.init.kaiming_uniform_`**, **`torch.nn.init.kaiming_normal_`**
5. **Orthogonal 초기화:**
    - 행렬을 직교 행렬로 초기화합니다.
    - 주로 RNN (순환 신경망)의 가중치 초기화에 사용됩니다.
6. **Identity 초기화:**
    - 단위 행렬로 가중치를 초기화합니다.
    - 주로 ResNet 등에서 사용됩니다.
    

참고자료: https://keras.io/ko/initializers/