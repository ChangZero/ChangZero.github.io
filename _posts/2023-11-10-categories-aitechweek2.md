---
title: "[AI Tech] 네이버 부스트 캠프 2주차 회고"
excerpt: "AI Tech Week 2"

categories:
  - boostcamp
tags:
  - [aitech, naver, boostcamp]

permalink: /boostcamp/week2/

toc: true
toc_sticky: true

date: 2023-11-17
last_modified_at: 2023-11-17
---

## 2주차 강의 리마인드
이번 주차는 파이토치에 대해 배웠다. 파이토치를 독학으로 공부도 해보고 프로젝트에 적용도 해보았지만, 심도있게 깊이 파보지는 않았다. 상세한 내용은 노션에 정리하고 간단한 키워드 중심으로 요약하는 내용은 블로그에 기재하기로 했다. 또한 자세한 내용이나 필요한 내용들은 추후 블로그에서 다루도록 하겠다.

### Pytorch VS Tensorflow
Pytorch는 동적 계산 그래프로 그래프가 실행 중에 동적으로 실행되고, Tensorflow는 정적 계산 그래프로 그래프를 먼저 정의하고 데이터를 주입하는 방법으로 변경이 불가능하다는 차이점이 있다.

### Pytorch 기초
텐서 생성, 탠서 연산, 텐서 조작(Reshape, view), 텐서 변환, 수학 함수

### AutoGrad와 Optimizer
- nn.Module: 딥러닝 Layer의 기본 클래스로 input, output, forward, backward를 정의한다.
- nn.Backward: 역전파 진행하여 파라메터 업데이트

### Pytorch datasets dataloaders
- 해당 부분은 과제를 통해 상세히 진행된었다. 간략하게 정리하면 Dataset class의 기본 구조는 다음과 같으며,아래 구조를 기반으로 정형, 비전, 자연어 데이터셋 클래스가 변형된다.
```python
import torch
from torch.utils.data import Dataset
class CustomDataset(Dataset):
	def __init__(self, text, labels): #초기데이터 생성 방법을 지정
		self.labels = labels
		self.data = text

	def __len__(self): # 데이터의전체길이
		return len(self.labels)

	def __getitem__(self, idx): # index값을 주었을때 반환되는 데이터의형태(X,y)
		label = self.labels[idx]
		text = self.data[idx]
		sample = {"Text": text, "Class": label}
		return sample
```

### 모델 블러오기 및 모니터링
모델을 저장하고 불러오는 방법에 대해 배울 수 있었으며, 어렵지는 않았다. 또한 전이학습에 대해 간단하게 배우면 이부분은 심화과제로 더 깊게 공부했다.<br>
학습 모니터링은 WandB와 Tensorboard에 대해 배웠다.

### Multi-GPU 학습
- 데이터를 나눠 GPU에 할당후 결과의 평균을 취하는 방법
- minibatch 수식과 유사한데 한번에 여러 GPU에서 수행
- PyTorch에서는 아래 두 가지 방식을 제공
DataParallel, DistributedDataParallel
- DataParallel ­단순히 데이터를 분배한 후 평균을 취함
→GPU 사용 불균형 문제 발생, Batch 사이즈 감소 (한 GPU가 병목), GIL
- DistributedDataParallel ­각 CPU마다 process 생성하여 개별 GPU에 할당
→기본적으로 DataParallel로 하나 개별적으로 연산의 평균을 냄

```python
parallel_model = torch.nn.DataParallel(model) # Encapsulate the model
predictions = parallel_model(inputs). # Forward pass on multi-GPUs
loss = loss_function(predictions, labels) # Compute loss function
loss.mean().backward() # Average GPU-losses +backward pass
optimizer.step() # Optimizer step
predictions = parallel_model(inputs) # Forward pass with new parameters
```

## 피어세션
이번주  피어세션부터는 팀원들과 친해져서 어색하지 않게 진행되었다. ㅎ. 월,화,수 는 팀원당 1명이 지난주 내용 중 설명해주고 싶은 내용 혹은 더 자세하게 공부해서 팀원들에게 공유하고 싶은 내용들을 발표를 했다. 목요일은 해당 주차 강의 중 궁금하거나 어려웠던 부분을 서로 공유하고 알려주는 시간을 가지고, 금요일은 한 주의 회고를 진행했다. 

## 회고
이번 주차는 저번 주차에 비해 제공된 강의는 적었다.(...강의는 적었다.) 하지만 부덕이라는 오리가 주도하는? 상당한 양의 과제가 제공되었다. 덕분에 19시가 넘어서도 과제를 하고 있었다... 밤 늦게 과제하는 노력을 해서 그런지 저번주 보다는 일찍 강의를 마친것 같다. 부스트캠프에서 제공된 과제를 통해 파이토치의 전반적인 중요한 기능들을 한 번 씩은 다 써볼 수 있었다. 앞으로 있을 다양한 프로젝트를 수행하기 위한 기초적인 소양은 어느정도 갖춘것 같다.!!!!

