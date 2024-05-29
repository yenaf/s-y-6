/* 
  자료형(data types)

  primitive(원시타입) : string, number, boolean, null, undefined
  object(객체타입)
*/

/*
  string(문자열)
  텍스트 정보, 따옴표로 감싸야 함
  숫자, 특수문자도 따옴표 안에 포함되어있으면 문자열이다
*/
let text='안녕하세요';
let gender='여성';

console.log(text);
console.log(text + gender);
console.log(text, text, '야호');

//문자 + 변수를 동시에 쓰고싶을때
console.log(text + ' 저는 yena에요. 저의 성별은 ' + gender + '입니다.');

// 템플릿 리터럴 : 문자르 표현하는 새로운 문법
//(ES6) 백틱(`), 달러($), 중괄호({}) 조합으로 사용
console.log(`${text} 저는 예나에요. 저의 성별은 ${gender}입니다.` );

/* 
  number(숫자형)
  정수, 실수
  연산이 가능하다
*/
let num=100;
let num2=0.12;

console.log(num,num2);
console.log(num+num2);
console.log(num+1);
console.log(num+3);
console.log(num*3);
console.log(num/2);

/* 
  boolean(불리언)
  true, false(참, 거짓) 두가지 값만 가지는 데이터
*/
let isWater=true;
let haveMoney=false;
console.log(isWater, haveMoney);

/*
  null(빈값)
  값이 없음을 의도적으로 명시
*/
let temp=null;
console.log(temp);
temp='hello~'
console.log(temp);

/*
  undefined
  값도 없고, 타입도 지정되지 않은상태
*/
let x;//변수 선언만 했을때 초기 값으로 undefined 할당
console.log(x);//undefined

/*
  배열(Array) : 데이터 구조. 여러개의 데이터를 순차적으로 저장
  배열의 요소(아이템) : 배열 안에 있는 데이터 하나하나
  배열의 위치(인텍스) : 0부터 시작 - zero based numbering
  배열의 길이(크기) : 요소의 갯수와 동일
  */
 const fruits=['orange', 'pineapple', 'grape', 'apple'];
 console.log(fruits);
 console.log(fruits[0]);//fruits 배열의 위치가 0 인 요소 출력 -> orange
 
 /* 
  js에서는 배열 요소의 자료형이 달라도 된다
  why? js동적 타입 특성으로 인한 유연성
 */
const mixedArray=[1,'yena', true, {name : 'yena'}, null];
console.log(mixedArray);

// 배열안에 배열이 들어 갈수 있다.(중첩가능)
const korean = [
  ['가','나','다'],
  ['라','마','바'],
  ['사','아','자']
]
// Q1) 가자 글씨 출력하기
console.log(korean[0][0],korean[2][2]);
// Q2) 사다 글씨 출력하기
console.log(korean[2][0],korean[0][2]);


const nums=[
  [
    [1,2,3],
    [4,5,6]
  ],
  [
    [7,8,9],
    [10,11,12]
  ],
]

// Q3) 3차원 배열에서 숫자 8 출력
console.log(nums[1][0][1]);