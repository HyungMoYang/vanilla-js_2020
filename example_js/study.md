초보자를 위한 javascript - vanilla javascript part 1

Module 1

# What is Javascript?

    - javascript란 무엇인가?
    - javascript의 버전

# Vanilla JavaScript?

    - Vanilla javascript란 무엇인가?
    - Vanilla javascript를 배워야하는 이유
    - framework?

# Variable

    - 변수란 무엇인가?

# let, const, var

    - 변수의 선언과 사용

# Data Types on JS

    - Datatype의 정의
    - 종류

# Array

    - javascript에서 Array의 정의
    - Array 문법
        - 선언과 호출

# Object

    - javascript에서 Object의 정의
    - Object 문법
        - 선언과 호출

Module 2
2-1

# Function

    - function
    - argument
    - parameter

2-1.1 - `` 백틱을 이용한 text 출력 ( 사용법 ) - 함수의 return 값 - Object 안에 함수 넣기

2-2 JS DOM Functions - DOM(Document Object Model) - getElementsById() - console.dir  
 - querySelector() - JS를 통해서 HTML을 조종할 수 있다.
  
2-4 Events and event handlers - javascript는 event에 반응하기 위해 만들어짐 ( 반응형 ) - tag의 선택으로 html코드에 반응성을 띄게 할 수 있다.

2-5 조건문 - if / else / and / or

2-6 if / else function practice part 1 - javascript를 통해 click event에 반응하는 html 문서 - always use MDN

2-7 if / else function practive part 2 - html / css / javascript 파일은 각각의 역할에 충실하는 것이 좋다.
-> javascript function 내부에서 색을 변경하는 등의 css의 역할을 대신하는 것은 좋은 코딩 습관이 아니다.

    - classList에 class가 포함되어 있는지 확인해서 상태 변경하기 ( html class 추가 / 제거 )
      or toggle을 활용한 event 처리

3-1 Making a JS Clock part 1 - js file 사용시에 html에 연결하고 init() 함수를 통해서 초기화를 먼저 하고 만드는 습관 - 어떤 project를 만들때, 기획하고 작성하는 과정에서 분할 정복을 기본으로 하자. -> 파일을 쪼개서 작성하는 습관 - getTime() 만들기

3-2 Making a JS Clock part 2 - setInterval()을 통한 실시간 clock

3-3 Saving the User Name part 1 - localStorage - getItem() / setItem()

3-4 Saving the User Name part 2 - localstorage에 이름 저장하기 - form은 웹 페이지에 정보를 제출 하는 양식? - default로 값을 다른 곳으로 보내려고 한다. - addEventListener("a", functionA ); -> "a" event를 발생시키면 functionA 함수를 호출한다. - localstorae는 웹페이지에 기반하기 때문에 다른 웹 페이지로 가면 다른 저장 목록이 있다. (URLs를 기반으로 작동)

3-5 Making a To-do List part 1 - localStorage를 이용한 To-do List 저장 및 출력 - javascript를 사용해서 element를 만들고 부모 클래스에 추가 하는 방법

3-6 Making a To-do List part 2 - User에게 받은 To-do 목록을 Array에 저장해서 List로 만들기 - To-do 정보를 담고 있는 Object를 만들어서 Array에 추가 - localstorage는 모든 데이터를 string으로 받으려고 한다. 따라서 js의 object를 저장할 수는 없다. 그래서 object를 string으로 변환해 주어야함 - JSON.stringify() : 데이터를 string으로 바꾸어줌. - 기존 저장된 To-do List를 불러와 출력하기 위해서 string으로 변환된 데이터를 불러오는 과정에서 다시 object로 변환하기 - JSON.parse() - Array forEach() 구문 -> Array의 각각의 요소에 대해서 함수를 실행시키는 구문

3-7 Making a To-do List part 3 - To-do List의 delete button을 누르면 요소가 삭제되는 것을 구현 - 1. HTML에서의 삭제 - 2. JS에서의 삭제 - 3. localstorage에서의 삭제 - 마우스 click 이벤트의 추적 - event.target.parentNode로 이벤트를 발생시킨 버튼의 부모를 찾아서 id 값을 찾아 li를 삭제한다. -> delete child element mdn - remove child - filter() 함수 - filter() 와 forEach()를 강조함

3-8 Image Background - unsplash free image download - random number를 활용한 background image 출력 - Math.random() / Math.ceil() / Math.floor() - css/animation을 이용한 background 출력

3-9 Getting the Weather part 1 - navigator를 이용해서 현재 사용자의 위치(위도/경도)를 받아와 local에 저장하기 - weather API 사용위한 준비 - 로직 - 사용자의 위치가 저장되어 있는가? - 아니면 묻고 맞으면 local에서 정보를 가져옴
  
3-9 Getting the Weather part 2 API ( END ) - openWeatherMap.org의 API를 이용한 날씨 정보 받아오기 - javascript가 강력한 이유 - 웹사이트로 request를 보내고 응답을 통해 데이터를 얻을 수 있는데, 가져온 데이터를 refresh없이 내 웹사이트에 적용 시킬 수 있기 때문이다. - fetch() 함수, then() - 데이터를 기다린 이후에 작업할 내용

### 추가로 할 것

    - 결과물 css 입히기
    - vanilla javascript 수업내용 복습
    - 추가적인 js 공부
