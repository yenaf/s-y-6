// 반복문

// * for 문
for(let i=0;i<10; i++){
  console.log('안녕',i);
}
console.log('-------------------');

// 1~5까지 출력
for (let i = 1; i < 6; i++) {
  console.log(i);
}
console.log('-------------------');

// 5~1까지 출력
for(let i=5;i>0;i--){
  console.log(i);
}
console.log('-------------------');

//1~10까지 총 합 구하기
let n=10;
let sum = 0;
for(let i=1;i<=n;i++){
  // sum = sum+i;
  // sum 변수에 값을 재할당(이전 sum변수 값 + 현재 반복 변수 값)
  sum+=i;
}
console.log(sum)
console.log('-------------------');

// 1~20 중에서 짝수 일 때의 합을 구하기
let evenSum = 0;
for(let i=1;i<=20;i++){
  if(i%2===0){
    evenSum+=i;
  }
}
console.log(evenSum);
console.log('-------------------');

// * while문
let idx = 0;
while(idx<10){
  idx = idx+1;
  console.log('안녕',idx);
}
// ?
let idx2=0;
while(true){
  console.log(`안녕`,idx);
  idx2 = idx2+1;
  if(idx===10){
    break;
  }
}
console.log('-------------------');

// 구구단 while 버전
let i=2, j=1;
while(i<10){
  while(j<10){
    console.log(`${i} x ${j} = `,i*j);
    j++;
  }
  i++;
  j=1;
}
console.log('-------------------');

// 구구단 for 버전
for(let i=2;i<10;i++){
  for(let j=1;j<10;j++){
    console.log(`${i} x ${j} = `,i*j);
  }
}
console.log('-------------------');

// * do~while문
/*
  자바스크립트에서 사용되는 반복문 중 하나로,
  조건이 참인지 여부에 상관없이 코드블록을 최소 한 번 실행한 후 조건을 검사한다.
  즉, 항상 코드블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속한다
*/

// do{
//   실행할 코드 내용
// }while(조건);

// let d=1;
// do{
//   console.log('무조건 한번 실행',d);
//   d++;
// }while(d<0);

// let number;
// do{
//   number = prompt('숫자를 입력해주세요(10보다 큰 숫자)');
// }while(number<=10);
// console.log('입력한 숫자 : ',number);


// * break
// 반복문을 중단하고 빠져나옴
for(let i=0;i<100;i++){
  if(i==5){
    console.log('멈춰!');
    break;
  }
  console.log(i);
}
console.log('-------------------');

// * continue
// 현재 반복을 중지하고 다음 반복으로 넘어감
for(let i=1;i<=5;i++){
  if(i===3){
    console.log('스킵~');
    continue;
  }
  console.log(i);
}
console.log('-------------------');

// 1000까지의 숫자중에 13의 배수면서 홀수인 숫자
let num2=prompt('1~1000까지 숫자입력 (13의 배수이면서 홀수인 숫자를 보여드릴게용)');
for(let i=1;i<=num2;i++){
  if(i%13==0 && i%2==1){
    console.log(i);
  }
}
console.log('-------------------');

// 0~100까지 2또는 5의 배수 총합 구하기
let sum3=0;
for(i=0;i<=100;i++){
  if(i%2===0 || i%5===0){
    sum3+=i;
  }
}
console.log(sum3);
console.log('-------------------');

