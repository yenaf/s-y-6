// * 배열의 반복
// 기본 for문
// for of 문
// forEach() 메서드


let numbers=[1,2,3,4,5,6];
let fruits = ['사과','바나나','수박','포도','파인애플'];

for(let i=0;i<fruits.length;i++){
  console.log(fruits[i]);
}
console.log('-----------------------------');

// * for~ of
for(let number of numbers){
  console.log(number);
}


// * forEach()
// index, array는 선택사항
numbers.forEach(function(number,index, array){
  console.log(number,index, array);
})

console.log('-----------------------------');




//////////////////////////////////////////////////////////////////////////////////



const arr = [1,2,5,6,7];
const alphabets = ['a','b','c','d'];

// *기본 for 문
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log('-----------------------------');

// *for~of 반복문
// 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 없다
// 순서가 있는 구조 반복에 적합
// 배열의 각 요소를 반복하면서 변수에 순서대로 할당하고, 각각 요소에 대해 반복문 블록 실행

for(let alphabet of alphabets){
  console.log(alphabet);
}
console.log('-----------------------------');

// *forEach() 메서드
// 배열의 각 요소에 대해 지정된 함수를 실행
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행 할때 사용
// 각 요소에 대해 함수가 호출 될 때마다, 해당 요소가 함수의 인자로 전달된다.

// 1. currentValue를 의미. 반복하고 있는 현재요소
// 2. currentValue의 인덱스(위치)
// 3. forEach를 호출한 배열
alphabets.forEach(function(alpha,idx,arr){
  console.log(alpha);
})
console.log('-----------------------------');

// * for~in 반복문
// 객체에 사용 가능한 반복문
// key로 접근
// 객체의 key를 반복 할수있는 구문

const dog={
  name : '멍멍',
  gender: 'm',
  info : 'cute',
}

for(let key in dog){
  console.log(key, dog[key]);
}
console.log('-----------------------------');


const 객체={
  name : 'yena',
  gender : 'w',
  age : '33',
}
for(let 변수 in 객체){
  console.log(변수,객체[변수]);
}


