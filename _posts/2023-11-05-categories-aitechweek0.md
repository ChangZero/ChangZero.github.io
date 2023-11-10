---
title: "[AI Tech] 0주차 온보딩 강의/Git 기초 강의"
excerpt: "Git 기초 강의"

categories:
  - boostcamp
tags:
  - [git, aitech, naver, boostcamp]

permalink: /boostcamp/week0/

toc: true
toc_sticky: true

date: 2023-11-05
last_modified_at: 2023-11-05
---
## 0주차 온보딩 강의
0주차인데 합류 축하한다고 상당한 양의 온보딩 강의 패키지를 선물로 주셨다.;;;
0주차강의는 가산점으로 인정받기 위해 들었던 부스트코스에 제공되었던 강좌인 AI Math와 파이썬 강좌가 제공되었다. <br>
나는 이미 들었던 강의보단 새로 올라온 Git 강의 위주로 듣기로 했다.

## Git 기초 강의
### 깃 명령어에 대한 간단한 설명
- Git Commit

git의 버전을 저장

- Git issues

소통을 하기 위한 게시판 같은 느낌

- Git Clone

gitbub과 내 컴퓨터환경과 연결

- Git Config

commit한 사람 인증 방법

- Git Push

로컬에서 원격저장소로 업로드 방법

- Git Pull

원격저장소에서 로컬로 불러오기 fetch+merge

- Git Fetch

원격 저장소에서 로컬로 불러오기 로컬과 원격 비교 진행

- git merge

불러온거를 병합 할지 말지 확인 후 가능하면 충돌이 발생하지 않으면 병합

- git init

로컬에서 생성해서 로컬로 옮길 때

- git add

git commit에 포함될 파일을 고르는 명령어로 선택시 staging area로 이동되고 git commit명령어 사용시 원격저장소로 업로드됨

- git checkout

시간이동! commit history에 있는 버전으로 이동

vscode에서 사용시

**checkout사용할때는 이동할 버전 옆 공간 클릭**

**복귀할때는 master 아이콘 클릭**

- git remote

다양한 실험을 하고 싶을 때 사용

### 깃 명령어 상세 정리
강의가 기초 강의다 보니 설명이 부족하다고 생각해 추가적으로 명령어들을 상세히 정리했다. 실제로 내가 팀원들과 협업할 때 사용했던 명령어들이 많았다.

| 분류 | 명령어 | 내용 설명 |
| --- | --- | --- |
| <새로운 저장소 생성> | $ git init | .git 하위 디렉토리 생성(폴더를 만든 후, 그 안에서 명령 실행 => 새로운 git저장소 생성) |
| <저장소 복제/다운로드(clone)> | $ git clone <https:.. URL> | 기존 소스 코드 다운로드/복제 |
|  | $ git clone /로컬/저장소/경로 | 로컬 저장소 복제 |
|  | $ git clone 사용자명@호스트:/원격/저장소/경로 | 원격 서버 저장소 복제 |
| <추가 및 확정(commit)> | $ git add <파일명> git add * | 커밋에 단일 파일의 변경 사항을 포함(인덱스에 추가된 상태) |
|  | $ git add -A | 커밋에 파일의 변경 사항을 한번에 모두 포함 |
|  | $ git commit -m "커밋 메시지" | 커밋 생성(실제 변경사항 확정) |
|  | $ git status | 파일 상태 확인 |
| <가지(branch)치기 작업> | $ git branch | 브랜치 목록 |
|  | $ git branch <브랜치이름> | 새 브랜치 생성 (local로 만듦) |
|  | $ git switch -c <브랜치이름> | 브랜치 생성 & 이동 |
|  | $ git switch master | master branch로 되돌아 옴 |
|  | $ git branch -d <브랜치이름> | 브랜치 삭제 |
|  | $ git push origin <브랜치이름> | 만든 브랜치를 원격 서버에 전송 |
|  | $ git push -u < remote > <브랜치이름> | 새 브랜치를 원격 저장소로 push |
|  | $ git pull < remote > <브랜치이름> | 원격에 저장된 git 프로젝트의 현재 상태를 다운받고 + 현재 위치한 브랜치로 병합 |
| <변경 사항 발행(push)> | $ git push origin master | 변경사항 원격 서버에 업로드 |
|  | $ git push < remote > <브랜치이름> | 커밋을 원격 서버에 업로드 |
|  | $ git push -u < remote > <브랜치이름> | 커밋을 원격 서버에 업로드 |
|  | $ git remote add origin <등록된 원격 서버 주소> | 클라우드 주소 등록 및 발행(git에게 새로운 원격 서버 주소 알림) |
|  | $ git remote remove <등록된 클라우드 주소> | 클라우드 주소 삭제 |
| <갱신 및 병합(merge)> | $ git pull | 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고(fetch) 병합(merge)됨 |
|  | $ git merge <다른 브랜치이름> | 현재 브랜치에 다른 브랜치의 수정사항 병합 |
|  | $ git add <파일명> | 각 파일을 병합할 수 있음 |
|  | $ git diff <브랜치이름><다른 브랜치이름> | 변경 내용 merge 전에 바뀐 내용을 비교할 수 있음 |
| <태그tag 작업> | $ git log | 현재 위치한 브랜치 커밋 내용 확인 및 식별자 부여됨 |
| <로컬 변경사항 return 작업> | $ git restore  <파일명> | 로컬의 변경 사항을 변경 전으로 되돌림 |
|  | $ git restore  —staged <파일명> | git add를 통해서 수정 내용을 stage에 이미 넣었을 때 되돌림 |
|  | $ git fetch origin | 원격에 저장된 git프로젝트의 현 상태를 다운로드 |
|  |  |  |

### ETC
이번 강의때 새로 안 명령어는 checkout이다. 졸업작품 만들 때 팀원들과 협업하다가 DB가 꼬여서 지웠다 다시 만드는 뻘;;짓을 좀 했었는데 해당 명령어를 그때 알았다면 편하게 작업하지 않았을까.. 아쉬움이 생긴다.