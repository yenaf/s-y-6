# 2024.05.17~2024.05.20

## HTML

### 1. HMLT이란?
> Hypertext Markup Language. 웹페이지를 구성하는 가장 기초적인 언어
- Hypertext:  웹 페이지에서 다른 페이지로 이동할 수 있도록 하는 것
- Markup: 문서나 데이터의 구조를 명기하다

---

### 2. HTML구조

```HTML
<!-- 1 -->
<!DOCTYPE html>

<!-- 2 -->
<html lang="ko">
<!-- 3 -->
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<!-- 4 -->
<body>
    
</body>
</html>

```

#### 1. `<!DOCTYPE html>`
> HTML5 문서는 반드시 `<!DOCTYPE html>`으로 시작하여 문서 형식을 HTML5로 지정


#### 2. `<html></html>`
> 문서의 시작과 종료. 지금 작성하고 있는 문서가 html언어로 만들어졌다는 것을 알려주며, html 문서의 시작과 끝을 명시한다.
- `<html lang="ko">` : 언어
  - ko : 한국어, en : 영국 영어, en-US : 미국 영어, fr : 프랑스어, zh : 중국어, ja : 일본어


#### 3. `<head></head>`
> HTML 문서의 메타 데이터와 문서 정보를 정의하는 데 사용되는 태그

- title : HTML 문서의 제목. `<title>`태그 내부에 입력한 내용은 웹브라우저 화면 상단에서 문서의 제목을 보여준다. 
- style : HTML 문서의 Style 정보 정의
- link : 외부 리소스와의 연결 정보를 정의(CSS 파일 연계에 사용)
- script : JavaScript 를 정의
- mata : 언어, 저작권, 키워드 등 홈페이지 정보. 주로 브라우저 또는 검색엔진에서 사용
  - `<meta  charset="UTF-8">` : UTF-8 한글을 지원해주는 대표적인 인코딩방법. 해당 html의 문자코드가 UTF-8이라는 것을 나타내며 브라우저는 이부분을 보고 html 문자코드를 판별.(한글 깨짐 방지)


#### 4. `<body></body>`
> 문서의 몸통부분. 브라우저 창에 표시되는 부분 모두 해당되며 `<body>`태그안에 화면에 보이는 모든내용을 기술한다.

---


### 3. 기본문법
- 태그는 소문자로 작성한다
- 기본적으로 `<tag></tag>` 닫힌태그로 마무리한다
- 빈태그는 `</tag>` 닫힌 태그가 없이 기본태그 혼자 쓰이는것,내용 없이 구조적인 기능만 하는 요소
  - ex )  `<br>`, `<hr>`
- 속성 `<tag 속성="값"></tag>`
  - 태그를 보조하는 명령어로 태그마다 사용가능한 속성이 정해져있다.
- 요소(Elements) : html에서 시작태그와 종료태그로 이루어진 모든 명령어들을 의미
- 태그는 부모-자식 관계(중첩관계)를 갖는다(html-부모, head, body-자식)
- html 파일의 확장자는 html (일러스트의 확장자 AI, 포토샵의 확장자가 PSD)
- 접속하는 첫 페이지는 index.html 로 만든다.
- 주석(comment)는 개발자에게 코드를 설명하기 위해 사용하며, 브라우저는 주석을 화면에 표시하지 않는다.

---

### 4. 기본태그

- #### 제목태그 : `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
  - heading의 약자. 문서나 구분된 영역의 제목을 설정. 문서의 정보 계층을 구조화.
  - 하나의 HTML 문서에는 하나의 h1 태그를 권장
  - 웹 검색 엔진이 제일 먼저 검색하는 태그
  - h1은 웹 사이트의 로고에만 사용한다(html5 권장사항)
  - h2~h6  여러번 사용가능, 순서를 지켜서 사용한다.(h5태그밑에 h2쓸수없다)


- #### `<p>` 하나의 문단을 설정(Paragraph)
  - 본문을 적기 위한 태그
​

- #### 순서있는목록`<ol>` /  순서없는목록`<ul>`
  - ol(Ordered List) 정렬된 목록,순서가필요한 목록
  - ul(Unordered List) 정렬되지않은 목록
  - li(List ltem) 
  - `<ol>`과 `<ul>`은 자식으로 `<li>`만 포함가능. `<li>`는 단독으로 사용할수 없다.

- #### `<br>` 빈태그, 줄바꿈태그

- #### `<hr>` 수평 줄

- #### `<strong></strong>`: 두껍게! + Semantic 한 의미를 지님

- #### `<b></b>`: 두껍게!

- #### `<em></em>`: Emphasized, 강조! 기울여서 표시됨

- #### `<i></i>`: 이탤릭

- #### `<del></del>`: 중간 줄. 취소선

- #### `<u></u>`: 밑 줄

- #### `<img>` 이미지
  - `<img src="이미지경로" width="너비" height="높이" alt="대체텍스트">`
  - src : source
  - alt 필수 이미지대신표시할 텍스트 지정
  - 시각장애인이 사용하는 화면 읽기 기능은 alt속성에 텍스트를 읽는다. 간단한 이미지의 내용을 지정한다.

- #### `<a>` 하이퍼링크
  - Anchor 의 약자인 `<a>` 태그 사용
  - `<a href="URL 주소">화면에 보이는 내용</a>`
  - target: 링크된 문서를 열었을 때 문서가 열릴 위치 표시
    - _blank: 새로운 웹 브라우저 창에 연다(새탭)
    - _self: 현제 웹 브라우저 창에 연다(기본값)

### 5. 사용자 입력 태그

- #### `<form>` 태그: 사용자로부터 입력받는 요소들을 감싸는 태그
  - 회원가입, 설문조사, 로그인, 검색 등
  - 화면에 드러나지 않는 추상적인 태그(양식) ->영역으로만 존재함
  - action 속성: 사용자가 폼에 입력한 값을 전달할 주소
  - method 속성: 사용자가 폼에 입력한 값을 전달할 방법

- #### `<input>` 
  - [input MDN문서](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
  - 속성
    - type : 입력값의 종류
    - value : 보이는 입력 값
    - placeholder : 미리보기 텍스트(안내문구)
    - repuired : 값이 없는 상태에서 넘기면 입력란에 작성하세요라고 나옴
    - title : 리더기가 읽어줌
    - autocomplete

  - type 속성 값의 종류
    - text : 한줄짜리 텍스트를 입력할 수 있는 텍스트 상자
    - search : 검색(text랑 다른점 글쓰면 끝에 엑스표지우는표시 나타남)
    - tel : 전화번호 입력
    - url : url주소
    - email : 이메일
    - password : 비밀번호(사용자 입력시 안보이게 된다)
    - date : 사용자지역 기준으로 년, 월, 일
    - range : 숫자를 조절할 수 있는 슬라이드 막대
    - color : 색상표
    - checkbox : 주어진 항목에서 2개이상 선택 가능한 체크박스
    - radio : 주어진 항목에서 1개만 선택할 수 있는 라디오 버튼
    - file : 파일 첨부
    - button : 버튼
    - summit : 제출(서버전송버튼)
    - image : 이미지
    - reset : 초기화 버튼

### 6. 테이블 태그
- #### `<table>` : 표, 게시판 등
  - 
- #### `<tr>` : table row 줄(행)
- #### `<th>` : table header cell 제목칸(제목셀)
- #### `<td>` : table data cell 내용칸(데이터셀)
- #### `<caption>` : table 맨처음 시작은 반드시 들어간다. 스크린리더가 읽어준다(제목/설명)

### 7. 시맨틱 태그

- ### `<header>`
- ### `<footer>`
- ### `<nav>`
- ### `<main>`
- ### `<section>`
- ### `<aside>`
- ### `<article>`