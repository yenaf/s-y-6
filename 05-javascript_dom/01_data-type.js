// 변수 또는 함수의 매개변수가 전달될때
// 값 또는 참조가 어떻게 전달되는지?

// * pass by value(값에 의한 전달)
// 원시타입(primitive)은 값(value)이 복사되어 전달된다

let num = 1;
let num2 = num;
console.log(num);
console.log(num2);
console.log(num===num2);//true

num = 5;
console.log(num,num2);
console.log(num===num2);//false

function changeValue(x){
  x = 10;
  console.log('x : ',x);//10
}

changeValue(num);
console.log(num);//5

// 함수로 전달 될 때, 변수의 값이 복사되어 함수의 매개변수로 전달
// 따라서 함수내에서 매개변수의 값을 변경하더라도 원본 변수의 값은 변하지 않는다
// why? 함수내에서 사용되는 변수는 함수 내에서만 유효한 지역 변수이기 때문이다
// x가 num의 값의 복사본을 가지고 있기 때문

// * pass by reperence(참조에 의한 전달)
// 객체나 배열 같은 참조타입 전달될 때 사용
// 변수의 메모리 위치(참조)가 전달 되므로 함수 내에서 요소를 변경하면 원래 변수도 변경된다.
