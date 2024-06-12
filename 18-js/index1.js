// ... : spread 연산자

// const a = [1,2,3];
// const b = [4,5];

// const spread = [...a,...b];
// console.log(spread);

//spread 방식
const c = [...'HELLO'];
console.log(c);// [ 'H', 'E', 'L', 'L', 'O' ]

//기존방식
const d = 'HELLO'.split('');
console.log(d);

// spread 연산자를 object에 사용하기
const chip ={
  base:'chip',
  company:'lotte',
}

const potatoChip = {
  ...chip,
  flavor:'potato',
}

console.log(potatoChip);
console.log('---------------------');

// rest 파라미터 : 나머지
const values = [10, 20, 30, 40, 50, 60];
function get(a,b,c,...rest){ // 순서대로 읽고 나머지는 rest에 넣어줘
  console.log(a,b,c);
  console.log(rest);
}
get(...values)
console.log('---------------------');

const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const {flavor,...abc} = icecream;
console.log(flavor);
console.log(abc);
console.log('---------------------');
