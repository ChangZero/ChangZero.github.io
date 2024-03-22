---
title: "[AI Tech] WandB를 활용해서 하이퍼 파라미터 최적화를 해보자"
excerpt: "프로젝트에 WandB를 적용해보자!"

categories:
  - boostcamp
tags:
  - [boostcamp, ai, wandb]

permalink: /boostcamp/wandb2/

toc: true
toc_sticky: true

date: 2023-12-17
last_modified_at: 2023-12-18
---
# WandB 활용해보기 2탄
## 부제: WandB의 sweep 기능을 활용해서 하이퍼 파라미터 최적화를 해보자!!


WandB 활용해보기 1탄에 이어 2탄으로 돌아왔습니다! 🎉🎉🎉

지난번에는 WandB 계정을 생성해서 원격 레포와 로컬 레포를 연동해서 실험관리 시스템을 구축하는 것까지 진행했는데요!

이번에는 WandB의 sweep기능을 통해 하이퍼 파라미터 최적화를 진행해보겠습니다. 

## Sweep 설정 파일 작성

sweep에 configuration을 전달하는 방법은 1. 셀 스크립트에 딕셔너리 형태로 직접 주는 방법과 2. 작성된 yaml파일을 cli에서 인자로 넘겨주는 2가지 방법이 있습니다.

이번에는 yaml파일을 넘겨주는 방법으로 진행하겠습니다.

```yaml
program: main.py

method: bayes

name: ncf-sweep

metric:
  name: Valid Loss
  goal: minimize

parameters:
  model:
    values: ['NCF']

  lr:
    distribution: uniform
    min: 0.0001
    max: 0.01

  batch_size:
    values: [32, 64, 128]

  embed_dim:
    values: [8, 16, 32]

  mlp_dims:
    values:
			- 16,16
			- 32,32
      - 16,32,64
      - 32,64,128

  epochs:
    values: [10, 30, 50, 100]

  dropout:
    values : [0.1, 0.2, 0.3]
```

NCF모델의 하이퍼파라미터를 yaml파일에 작성했습니다. 

`program` : 실행할 파일 경로를 입력해줍니다.

`method` : 하이퍼파라미터 최적화 방법으로 랜덤서치, 그리드서치, 베이지안 최적화 3가지 방법이 존재합니다.

`name`: 원격 레포에 기록될 실험 이름입니다.

`metric`: 최적화할 목적함수로 이때 `name`은 wandb.log로 넘겨준 키값을 주어야하며 `goal`을 통해 minimize, maximize여부를 결정해줍니다.

`parameter`: 하이퍼 파라미터로 우리가 정해준 `method`에 따라서 선택되어 실험이 진행됩니다. 연속형 혹은 이산형으로 값을 지정해 줄 수 있으며, 연속형으로 지정할 시 최소값과 최대값을 정해줄 수 있습니다.

## Sweep을 실행해보자!

이제 yaml파일을 생성했으니 실행해보겠습니다.

```bash
wandb sweep --entity <조직명> --project <프로젝트명> <sweep.yaml경로>
```

터미널에 조직명, 프로젝트명, sweep.yaml의 경로를 인자로 주고 실행시킵니다.

![wandb설정](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/6d284405-ed15-4717-b886-4d9ebbbf4311)

성공적으로 yaml파이을 읽어드리면 다음과 같이 agent ID를 발급해줍니다.

```bash
wandb agent --count <실험 횟수> <조직명>/<프로젝트명>/<ID>
```
![Untitled (27)](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/8ca24476-903d-41c7-866a-284eae3f2dc5)

해당 명령을 주면 설정해준 실험 횟수만큼 최적화 실험이 진행됩니다.

위 사진처럼 먼가 진행되는거 같은면 맞게 잘 따라 오신겁니다. ㅎㅎ

wandb 홈페이지에서 확인해보면 다음과 같이 실험 결과를 확인할 수 있습니다.

![Untitled (28)](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/3a7787cb-01f5-4a2f-a974-c449ebca24e7)

?? 흠 간단하게 돌렸을때 실험결과는 처참하지만… 일단 돌아가긴하는 걸루…

이제 하이퍼파라미터 최적화 기능을 구현했으니 nohup 명령어(백그라운드 명령어)로 실행시켜주고 퇴근해주면 됩니다.ㅎㅎ

```bash
nohup wandb agent --count 10000 <조직명>/<프로젝트명>/<ID> > sweep.out &
```

다음날 출근 후 결과를 확인해주면 밤동안 있던 실험 결과를 확인할 수 있습니다 🥳🥳🥳🥳 

![Untitled (29)](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/7e313b0e-dad9-4b39-8aa6-feb42a4581d3)

## 참고문헌

https://docs.wandb.ai/guides/sweeps