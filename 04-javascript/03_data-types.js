/* 
  * 자료형(data types)

  primitive(원시타입) : string, number, boolean, null, undefined
  object(객체타입)
*/

/*
  * string(문자열)
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
// (ES6) 백틱(`), 달러($), 중괄호({}) 조합으로 사용
console.log(`${text} 저는 예나에요. 저의 성별은 ${gender}입니다.` );

/* 
  * number(숫자형)
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
  * boolean(불리언)
  true, false(참, 거짓) 두가지 값만 가지는 데이터
*/
let isWater=true;
let haveMoney=false;
console.log(isWater, haveMoney);

/*
  * null(빈값)
  값이 없음을 의도적으로 명시
*/
let temp=null;
console.log(temp);
temp='hello~'
console.log(temp);

/*
  * undefined
  값도 없고, 타입도 지정되지 않은상태
*/
let x;//변수 선언만 했을때 초기 값으로 undefined 할당
console.log(x);//undefined

/*
  * 배열(Array) : 데이터 구조. 여러개의 데이터를 순차적으로 저장
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

/*
  * 객체 (object) (key:value)
  프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
  속성과 메서드로 구성
  속성 : 키(key)와 값(value)의 쌍으로 이루어져 있다 - 상태나 특징
  메서드 : 함수(function)를 값으로 가진다 - 동작이나 행위
*/
const cat={
  name:'장화',
  age:10,
  inCute:true,
  mew: function () {
    return '냐옹';
  }
}
console.log(cat);

// * 객체(object)의 속성(key)에 접근하는 방법
// 1. 점 표기법 (.)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);
console.log(cat.mew());//함수안에 리턴값만 가져옴

// 2. 대괄호 표기법 ([])
console.log(cat['name']);
console.log(cat['age']);

// 3. key가 변수에 저장되어 있을때 사용법
const temVal='name';
console.log(cat[temVal]);// cat['name'] = cat.name

//객체 변수 선언 실습
const a={
  name : '이몽룡',
  age : 18,
  like : ['강아지','고양이'],
  isMarried : true,
  girlfreind:{
    name: '성춘향',
    age: 16
  }
}
console.log(a);

// * typeof : 자료형을 확인할수있는 키워드
console.log(typeof '문자');//string
console.log(typeof 123);//number
console.log(typeof 3.14);//number
console.log(typeof true);//boolean
console.log(typeof false);//boolean
console.log(typeof null);//object 초기 구현중 하나로서, null값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
console.log(typeof undefined);//undefined
console.log(typeof fruits);//object -> 배열은 object
console.log(typeof cat);//object

// * 형변환

// String() : 문자로 형변환
let str1=true;
let str2=123;
let str3=undefined;
console.log(str1, str2 , str3);
console.log(typeof(str1),typeof(str2),typeof(str3));
console.log(typeof String(str1),typeof String(str2),typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

// Number() : 숫자로 형변환
let n1=true;
let n2='123';
let n3=123.12;
console.log(typeof(n1),typeof(n2),typeof(n3));
console.log(typeof Number(n1),typeof Number(n2),typeof Number(n3));
console.log(parseInt(n3));//정수(int)로 변경
console.log(parseFloat(n3));//실수(float)로 변경

// NaN :  not a namber - 숫자가 아님
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문에 -> NaN
console.log(Number(undefined), typeof Number(undefined));
console.log(Number(null), typeof Number(null));

//형변환 실습
let mathScore;
let engScore;
mathScore=77;
engScore=88;
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(`수학과 영어의 평균점수는 ${avgScore}입니다`);

//사용자 입력으로 평균성적 구하는 프로그램 만들기
// let mathScore = Number(prompt('수학점수를 입력하세요'));
// let engScore = Number(prompt('영어점수를 입력하세요'));
// let avgScore = (mathScore + engScore)/2;
// console.log(alert(`수학과 영어의 평균점수는 ${avgScore}입니다`));


