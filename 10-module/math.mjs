// mjs확장자? es6에서의 mojule 형식
// 모듈을 가져올때 import 를 사용한다

// 실행시 확장자를 적어야한다
// package.json에 "type":"module" 적어야 한다
const add = (a,b)=>{
  return a+b;
}

export default add;
