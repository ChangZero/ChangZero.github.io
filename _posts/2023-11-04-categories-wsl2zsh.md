---
title: "WSL2와 zsh로 개발환경 구축하기"
excerpt: "WSL, zsh, Oh My Zsh"

categories:
  - tech
tags:
  - [wsl2, zsh, Oh My Zsh, VScode]

permalink: /tech/wsl2zsh/

toc: true
toc_sticky: true

date: 2023-11-03
last_modified_at: 2023-11-05
---

## 1. WSL 활성화
관리자 권한으로 Windows PowerShell을 실행하여
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
두 명령어로 순차적으로 입력한다. 이후 컴퓨터를 재부팅해준다.
```
wsl --set-default-version 2
```
PowerShell에 명령어를 입력하여 WSL2를 기본버전으로 설정한다. <br>
이후 Microsoft Store에서 원하는 Ubuntu 버전을 찾아서 설치를 진행한다. 또는
```
wsl --install -d Ubuntu <버전>
```
해당 명령어로 설치해주어도 무관하다.<br>
실행 후 계정 생성 및 비밀번호를 설정해준다. <br> 
리눅스 버전을 새로 시작할 때는 패키지 관리자를 업데이트 해주는 습관을 가지는 것이 좋다. 패키지 업데이트 명령어는 다음과 같다.
```
sudo apt update -y && sudo apt upgrade -y
```

## 2. zsh로 설치
### Windows Terminal 설치하기
Microsoft Store에서 Windows Terminal을 설치한다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/affe7bdc-5381-46ea-8008-430b4cbf5100)
Windows Terminal을 실행 한 후 설치한 Ubuntu 버전으로 터미널을 띄운다.

### zsh 설치하기
```
sudo apt install zsh -y
```
해당 코드로 zsh 설치를 진행한다. <br>

## 3. Oh My Zsh 로 터미널 꾸미기
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### Powerlevel10k 테마 적용
```
git clone https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k
```
위 명령어 실행 후 
```
vi ~./zshrc
```
vi 에디터를 활용해서 아래 사진과 같이 입력해준다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/9ed81ad9-1d74-4658-ab4a-bb059bf72886)

### MesloLGS NF 폰트 설치 및 설정
위 단계까지 오면 한글폰트가 깨지는 문제를 확인할 수 있다. <br>
https://github.com/romkatv/powerlevel10k/#manual-font-installation <br>
위 링크로 들어가서 MesloLGS NF 폰트를 모두 다운 받아준다. <br>
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/e2db4bf7-f973-4e38-a346-ab46c2513a9a)
해당 경로로 이동하여 아래 사진과 같이 설정을 변경해준다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/f4e4ed9e-a01c-4359-8461-1453808ed7ad)
필자는 IDE로 VSCode를 사용하는데 VSCode 설정 또한 바꿔주었다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/b75224fb-6594-4f15-bbf7-09c2ea274ae6)

### 테마 설정
이 단계가 완료되면 터미널을 재시작한다.
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/de5e8879-a734-474d-b9fe-b09c25b0e36f)
위 사진 처럼 다이아몬드가 잘 보인다면 위 과정을 성공적으로 진행한 것이다. 설명을 따라 진행을 해준다면 
![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/a0fa2599-9584-4d19-9703-1a2fb7349281)
위 사진처럼 폰트가 깨지지 않고 잘 나올 것이다. (물론 설정에 따라 화면이 다를 수 있음)

### ETC
해당 과정을 모두 마쳤으면 wsl2을 활용한 개발환경 구축을 마친것이다. Node.js나 miniconda 등 Linux 커맨드를 활용하여 설치를 진행하면 된다.