const add = (a,b)=>{
  return a+b;
}

const subtract = (a,b)=>{
  return a-b;
}

//두개를 모듈로 내보낼때
// module.exports = {
//   add:add,
//   subtract:subtract
// };

// 내보내는 이름이 같을때 축약해서 써도 가능
module.exports = {
  add,
  subtract
};