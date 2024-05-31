// * 내장 메서드
// 프로그래밍 언어나 프레임 워크에서 기본적으로 제공되는 메서드
// 따로 설치하거나 추가 설정할 필요가 없다

// * 문자열 관련 내장 메서드
// 문자열을 다루는데 유용한 기능들을 제공

let str='Happy Birthday';
let str2='     Happy Birthday~! ';

// 여기서 알수 있듯 문자열은 배열이다
console.log(str[0]);//H
console.log(str[0]+str[12]);//Ha
console.log(str[0]+str[1]+str[8]+str[11]);//Hard

// * length : 문자열 길이
// length는 메서드가 아닌 속성이다
console.log(str.length);//14

// * toUpperCase() : 대문자 변환
console.log(str.toUpperCase());

// * toLowerCase() : 소문자 변환
console.log(str.toLowerCase());

// * trim() : 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length);

// * indexOf() : 글자 위치 찾기
// 위치(index) : 0부터 시작
// 같은 문자열이 있으면 처음에 나오는 나오는 위치
// 존재하는 문자에 대해 검색하면 -1 반환
// 매개변수에 아무것도 넣지않아도 -1 반환
console.log(str.indexOf('y'));//4
console.log(str.indexOf('v'));//-1
console.log(str.indexOf());//-1

// * slice() : 문자열 자르기
// 음수 값이 들어간다면 뒤에서부터 순서를 센다
// 매개변수 2개일때 start ~ end-1
console.log(str.slice(10));
console.log(str.slice(1,5));
console.log((str.slice(-4)));

// * replace() : 문자열 바꾸기
console.log(str.replace('p','w'));
console.log(str.replace('B','b'));

console.log(str.replaceAll('p','r'));

// * split() : 문자열 쪼개기 (배열로 변환)
// 빈 문자열도 배열로 정렬된다.
let str3='dinner';
console.log(str3.split('e'));// ['dinn', 'r']
console.log(str3.split('n'));// ['di', '', 'er']

// * repeat() : 반복
console.log(str3.repeat(3));//dinnerdinnerdinner

console.log('-------------------------------------');
///////////////////////////////////////////////////

// * 배열 내장메서드
let arr = [1,2,3,4,5];
let arr2 = ['quokka','dog','koala','panda'];

// * length : 배열의 길이 --> length는 메서드아닌 속성!
console.log(arr.length);

// 배열에 값을 추가하는 방법
arr[5]=6;//배열의 5번째 인덱스에 6을 추가
// 메서드를 사용해서 추가하는 방법
arr.push(7);
console.log(arr);

// * push() : 맨 끝에 요소 추가

// * pop() : 맨 끝에 요소 제거
arr.pop();
console.log(arr);

// * unshift() : 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);

// * shift() : 맨 앞에 요소 제거
arr2.shift();
console.log(arr2);

// * includes(요소) : 요소가 있는지 없는지 검사(true/false 값으로 반환)
console.log(arr2.includes('dog'));//true

// * reverse() : 원본배열을 반대로 반환
console.log(arr.reverse());

// * join() : join 안의 문자열 기준으로 병합한후 문자열로 반환
console.log(arr2.join(''));
console.log(arr2.join('-'));

console.log('-------------------------------------');

///////////////////////////////////////////////////

// * 메서드 체이닝(method chaining) : 여러 메서드를 연결해서 사용

console.log('hello'.split(''));//['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse());//['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join(''));//olleh
console.log('-------------------------------------');

///////////////////////////////////////////////////

// map, filter, find
// 조건에 따라 요소를 변형하거나 선택

// * map()
// 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과로 새로운 배열을 생성
// 배열로 반환!
const numbers =[1,2,3,4,5];
const doubleNumbers = numbers.map(function(num){
  return num * 2;
})
console.log(doubleNumbers);//[2, 4, 6, 8, 10]
console.log('-------------------------------------');

// * filter()
// 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과가  true인 요소들로 이루어진 새로운 배열을 생성한다.
// 배열로 반환!

const pracNumbers = numbers.filter(function(num){
  return num%2===0;
})
console.log(pracNumbers);//[2, 4]
console.log('-------------------------------------');

// * find()
// 조건을 만족하는 첫 번째 요소 찾기
// 조건을 만족하면 해당요소를 반환 , 아니면 undefined 반환
// 값으로 반환!
const pracNumbers2 = numbers.find(function(num){
  return num%2===0;
})
console.log(pracNumbers2);//2


