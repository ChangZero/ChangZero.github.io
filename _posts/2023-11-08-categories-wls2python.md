---
title: "wsl2에서 PYTHON 시작하기"
excerpt: "wsl2, python"

categories:
  - Tech
tags:
  - [wsl2, python]

permalink: /tech/wsl2python/

toc: true
toc_sticky: true

date: 2023-11-08
last_modified_at: 2023-11-08
---

## Linux 배포 업데이트

```
sudo apt update && sudo apt upgrade
```

## pip, venv 설치
Ubuntu 18.04 LTS 부터는 python3가 이미 설치된 상태로 제공된다. 하지만 표준 패키지 관리자와 표준 모듈은 따로 설치해줄 필요가 있다.

```
sudo apt install python3-pip
```
pip 명령어로 파이썬 표준 라이브러리에 포함되지 않은 외부 라이브러리를 설치하여 사용할 수 있다.

```
sudo apt install python3-venv
```
venv를 설치해주면 다음과 같은 명령어로 파이썬 가상환경을 만들어 줄 수 있다.
```
python3 -m venv .venv
```

## Python 버전 업데이트
```
python3 --version
```
위 명령어를 통해 설치된 파이썬 버전을 확인 할 수 있으며, 업데이트를 위해선 다음과 같은 명령어를 사용하면 된다.

```
sudo apt upgrade python3
```

## 참고자료
https://learn.microsoft.com/ko-kr/windows/python/web-frameworks