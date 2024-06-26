# 2024.05.13

## GIT, CLI명령어

### git이란?
> 버전관리 시스템
- commit 기록
- github 소스코드 저장소

### GUI, CLI는 뭘까요?

- GUI(Graphic Use Interface): 그래픽 컴퓨터한테 명령
- CLI(Command Line Interface): 명령어로 컴퓨터한테 명령
- 프롬프트(prompt): 컴퓨터가 사용자에게 명령어를 입력받을 준비가 되었다고 알리는 것

### < git bash, terminal 에서 사용 가능한 명령어 >

- pwd(print working directory): 현재 나의 위치 출력
    - ~ (home): 홈의 위치 (/c/Users/계정명)
- ls(list segements): 현재 위치에서 디렉토리, 파일 목록 확인
    - -a (all): 숨김파일까지 확인 가능한 옵션
    - *숨김파일/폴더? .으로 시작하며 시스템에는 존재하지만, 기본적으로 나타나지 않는 파일/폴더
    - -l (long): 파일/디렉토리 정보를 자세히 표시하는 옵션
    - * ls -al: 옵션은 동시에 여러 개 사용 가능
- clear: 출력 내용 지우기 (터미널 청소)
- cd (change directory): 디렉토리의 위치를 변경 (이동)
    - ..: 부모 폴더를 의미
    - .: 현재 폴더를 의미 (자기자신)
- mkdir 폴더이름: 폴더를 생성
- git status: 현재 디렉토리 상태보기
- git add.: 현재 디렉토리의 모든 변경사항을 스테이징 영역에 추가
- git commit -m “커밋메세지”: 스테이징 영역의 파일을 커밋하여 저장소의 히스토리에 기록
- git log: 저장소의 커밋 히스토리 확인
- git push -u ofigin main: 로컬 저장소의 변경 사항을 원격 저장소로 푸시
    - 저장소의 메인에 처음 푸시할때 -u 사용

### 파일,폴더,이름을 짓게 될 때 주의할 점

- 공백(space bar) 대신에 언더스코어(_) 혹은 (-)을 사용해 단어를 조합
- 한글 대신에 영어 대소문자 사용 (숫자는 상관없음)

### 헷갈리는용어? 다 같은말!

- github = 원격 저장소 = remote repository = origin
- 내 컴퓨터 = local repository