// * 함수 만들기 1
// 함수선언문, 매개변수 2개, 두인자의 곱 반환
function multifly(x,y) {
  return x*y;
}

console.log(multifly(3,7));
console.log(multifly(2,2));


// * 함수 만들기 2
// 함수표현식, 매개변수 1개
// 입력받은수의 제곱을 콘솔창에 출력하는 함수 정의

const square = function(num){
  console.log(num**2);
}

square(4);
square(11);
square(5);

// * if문
// 연령대별 단어출력
let age = Number(prompt('나이를 입력해주세요'));

if(age>=20){
  console.log('삐빅 성인입니다.');
}else if(age>=17){
  console.log('삐빅 고딩입니다.');
}else if(age>=14){
  console.log('삐빅 중딩입니다.');
}else if(age>=8){
  console.log('삐빅 초딩입니다.');
}else if(age>0){
  console.log('삐빅 응애입니다.');
}else if(age == ''){
  console.log('값을 입력해주세요.');
}else{
  console.log('삐빅 잘못 입력 되었습니다.');
}


// 연령대별 단어출력 -> 함수로 만들기
// let age = Number(prompt('나이를 입력해주세요'));
// function ageGroup(age) {
//   if(age>=20){
//     return '삐빅 성인입니다.';
//   }else if(age>=17){
//     return '삐빅 고딩입니다.';
//   }else if(age>=14){
//     return '삐빅 중딩입니다.';
//   }else if(age>=8){
//     return '삐빅 초딩입니다.';
//   }else if(age>0){
//     return '삐빅 응애입니다.';
//   }else if(age == ''){
//     return '값을 입력해주세요.';
//   }else{
//     return '삐빅 잘못 입력 되었습니다.';
//   }
// }
// console.log(ageGroup(age));






// * 조건문
// 현재 시간을 받아오는 코드 0~23
// 삼항연산자
let now = new Date().getHours();
// console.log(now);

// if(now<12 && now>=0 ){
//   console.log(`지금은 오전입니다.`);

// }else{
//   console.log(`지금은 오후입니다.`);
// }