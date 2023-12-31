---
title: "WandB를 활용해서 하이퍼 파라미터 최적화를 해보자"
excerpt: "프로젝트에 WandB를 적용해보자!"

categories:
  - boostcamp
tags:
  - [boostcamp, ai, wandb]

permalink: /boostcamp/wandb1/

toc: true
toc_sticky: true

date: 2023-12-15
last_modified_at: 2023-12-15
---

# WandB란?

"WandB"는 "Weights and Biases"의 줄임말로, 기계 학습 실험을 추적하고 시각화하는 데 사용되는 도구 및 플랫폼입니다. WandB는 모델 훈련, 실험 결과 분석 및 모델 성능 개선을 위해 데이터 과학자, 연구원 및 엔지니어들에게 도움을 주는 강력한 도구입니다.

WandB에서 제공해주는 기능 다음과 같습니다.

1. **실험 추적**: WandB를 사용하면 각 실험의 하이퍼파라미터, 메트릭, 모델 가중치 등과 같은 중요한 정보를 자동으로 기록할 수 있습니다. 이를 통해 각 실험의 세부 정보를 쉽게 찾을 수 있고 실험 간 비교를 용이하게 할 수 있습니다.
2. **시각화**: WandB는 실험 결과를 다양한 그래픽으로 시각화할 수 있는 다양한 도구를 제공합니다. 훈련 손실, 정확도, 학습률과 같은 메트릭을 추적하고 이를 그래프나 차트로 표현하여 모델의 성능을 더 쉽게 이해할 수 있습니다.
3. **모델 체크포인트 저장**: WandB는 모델의 체크포인트를 저장하고, 이전에 수행한 실험 중에서 가장 좋은 결과를 가진 모델을 쉽게 식별할 수 있도록 도와줍니다.
4. **협업과 공유**: WandB를 사용하면 팀원들과 실험 결과를 쉽게 공유하고 협업할 수 있습니다. 또한 실험에 대한 노트와 주석을 남겨 다른 팀원들과 소통하는 데에도 도움이 됩니다.
5. **자동화된 보고서 생성**: WandB는 실험 결과를 기반으로 자동으로 보고서를 생성할 수 있습니다. 이를 통해 실험 과정을 문서화하고 공유할 수 있습니다.

# WandB 시작하기

## 1. 회원가입

[Weights & Biases – Developer tools for ML](https://kr.wandb.ai/)

위 홈페이지로 가서 회원가입을 진행해줍니다.

## 프로젝트 생성 및 초기화

프로젝트를 만들고 나면 quick start 페이지가 나옵니다. 이때 설정한 프로젝트명을 init으로 초기화 해줄겁니다.

![wandb1](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/bc3df76a-0f0c-4451-85c5-d8a6e934d24b)
터미널에 pip intall wandb입력하여 설치를 진행하고 이어서 wandb login을 입력해줍니다.

이후에 api키를 입력받는 문구가 나오는데 발급받은 api키를 입력해줍니다.

## Wandb 적용하기

```python
...
import wandb

def main(args):
    Setting.seed_everything(args.seed)

		############### wandb initialization
    wandb.init(project='project_name')
    
    ######################## WandB start run
    wandb.run.name = 'exp_name'
    wandb.run.save()

    wandb.config.update(args)
    
		...
    ######################## Model
    print(f'--------------- INIT {args.model} ---------------')
    model = models_load(args,data)

    ######################## TRAIN
    print(f'--------------- {args.model} TRAINING ---------------')
    model = train(args, model, data, logger, setting)
		...
```

main.py 코드에서 다음과 같이 초기화를 진행해줍니다. project이름은 홈페이지에서 프로젝트 만들때 설정한 이름으로 입력해줍니다. run.name은 내가 이번 실험에서 사용할 실험이름입니다.

```python
def train(args, model, dataloader, logger, setting):
    ...
    for epoch in tqdm.tqdm(range(args.epochs)):
        model.train()
        total_loss = 0
        batch = 0

        for idx, data in enumerate(dataloader['train_dataloader']):
            if args.model == 'CNN_FM':
                x, y = [data['user_isbn_vector'].to(args.device), data['img_vector'].to(args.device)], data['label'].to(args.device)
            elif args.model == 'DeepCoNN':
                x, y = [data['user_isbn_vector'].to(args.device), data['user_summary_merge_vector'].to(args.device), data['item_summary_vector'].to(args.device)], data['label'].to(args.device)
            else:
                x, y = data[0].to(args.device), data[1].to(args.device)
            y_hat = model(x)
            loss = loss_fn(y.float(), y_hat)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            total_loss += loss.item()
            batch +=1
            
            # Log train loss
            wandb.log({"Train Loss": total_loss/batch})
            
        valid_loss = valid(args, model, dataloader, loss_fn)
        
        # Log valid loss
        wandb.log({"Valid Loss": valid_loss})
        ...
       
    return model
```

train_loss와 valid_loss를 기록하기 위해 wandb.log를 사용하면 주기적으로 값이 추적되어 실시간으로 홈페이지에 올라갑니다.

홈페이지에서 다음과 같이 log가 잘 업데이트되는 것을 확인 할 수 있습니다.

![wandb2](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/66316e20-f636-433e-b32c-f164ba372dd8)


wandb에는 log 뿐만 아니라 artifact도 같이 기록할 수 있어서 필요한 차트나 파일들을 저장할 수 있습니다. 

부족한 글 읽어주셔서 감사합니다!😁

### 참고문헌

[W&B Docs | Weights & Biases Documentation](https://docs.wandb.ai/)

https://github.com/wandb/examples