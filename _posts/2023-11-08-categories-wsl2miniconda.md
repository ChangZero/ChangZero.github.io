---
title: "wsl2(Ubuntu 20.04)에서 miniconda 시작하기"
excerpt: "wsl2, python"

categories:
  - tech
tags:
  - [wsl2, python]

permalink: /tech/wsl2miniconda/

toc: true
toc_sticky: true

date: 2023-11-08
last_modified_at: 2023-11-11
---

## miniconda 설치

```
wget https://repo.anaconda.com/miniconda/Miniconda3-py38_22.11.1-1-Linux-x86_64.sh
```
해당 명령어로 miniconda 파일을 다운로드한다.
```
chmod +x Miniconda3-py38_22.11.1-1-Linux-x86_64.sh
```
실행 권한을 부여해야 앞으로 입력할 설치 명령어가 동작한다.!

```
bash Miniconda3-py38_22.11.1-1-Linux-x86_64.sh
```
bash 명령어로 실행하면 아래 사진과 같은 라이센스 동의에 대한 문구가 나온다. <br>
ENTER를 누르면 장황한 라이센스 내용이 나오는데 이거 다 읽고 최종적으로 yes 입력해준다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/334f6b32-3d43-4193-bf9f-f68e0795d1be)

이후 설치 디렉토리에 대해 물어보는데 Default가 /home/<사용자 명>/miniconda3로 되어있으며, 따로 경로 변경이 필요하면 이때 해주면 된다.
```
/home/<user>/miniconda3
```

## zsh 환경 변수 설정
zsh환경에서 conda명령어를 사용하기 위해서는 환경 변수 설정이 필요하다.

`vi ~/.zshrc` vi편집기로 .zshrc파일을 수정해야한다.
```
export PATH="/home/<username>/miniconda3/bin:$PATH"
```
.zshrc파일에 위 코드를 삽입하고 `source .zshrc`명령어로 파일을 실행시켜준다.
다시 conda명령어를 실행하면 `conda` 관련 커멘드가 잘 동작하는 것을 확인할 수 있다.


## ETC
- miniconda 가상환경 activate 명령어
  ```
  conda activate base
  ```

- miniconda 가상환경 deactivate 명령어
  ```
  conda deactivate
  ```

- miniconda가 설치되면 터미널 기본 가상환경에 항상 activate 될 수 있는데 이를 방지하는 명령어
  ```
  conda config --set auto_activate_base false
  ```
