//함수 : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

// 용어정리
// 함수 정의(선언) : 함수를 생성
// 함수 호출 :  함수를 사용

// 함수선언 방식

/*
  1. 명시적 함수선언(=함수 선언문)
  함수 이름과 매개 변수를 명시하고 함수의 본문을 중괄호로 감싼다
  스크립트 어디에서든 호출할 수 있다
  function 이라는 키워드를 사용하여 함수를 선언하는 방식이다
*/


function hellowWorld() {
  // return (리턴) 키워드 생략 가능
  console.log('hello, world');
}

hellowWorld();//호출

// return : 반환값
// 함수 내부코드(body, block)의 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단-> return 다음에 코드 작성은 의미가 없음


function hellowWorld2() {
  return 'hello, world';
}

console.log(hellowWorld2());

// 2. 함수 표현식
// 변수에 익명함수를 할당(저장)하는 형태
// 변수가 선언된 이후에만 호출 할 수 있다

// 익명함수 : 말 그대로 이름이 없는 함수
// 이름을 지정할 수있지만 이 경우에는 함수 내부에서만 사용 가능하다

const sayHello = function hello(){
  console.log('헬로 월드');
}
sayHello();
// hello(); // 에러뜸 내부에서만 사용가능하기 떄문

const helloWorld3 =function(){
  console.log('헬로 헬로 월드');
}

const helloWorld4 =function(){
  return '헬로 헬로 월드';
}

helloWorld3();// 함수는 여러번 호출 가능
helloWorld3();
helloWorld3();
console.log(helloWorld4());

//매개변수가 있는 함수
//매개변수가 한개일때
function food(text) {
  return text
}

console.log(food('제육덮밥'));

const pizza = '피자는 역시 하와이안 피자?';
console.log(pizza);

console.log(food(pizza));

const colaPrice = 2000;
console.log(typeof food(colaPrice));//매개변수는 어떤 데이터 타입이든 상관없다

