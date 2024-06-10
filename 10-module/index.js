// js 엔진, 구글 : v8 + c++ = node.js, 브라우저 밖에서 js
// 모듈에는 사용자가 만든 모듈, 시스템 모듈, 빌트인모듈

// export 해서 다른 파일이 불러와서 사용할 수 있게끔
// 모듈단위를 불러올때 require() -> commonJS,  es6 (import)

console.log(__dirname);//현재 디렉토리 폴더 이름출력
console.log(__filename);//현재 파일 이름출력

const add = require('./add.js');
console.log(add(1,2));
console.log('-----------------');

// scope(범위) : 모듈은 각각의 범위를 가지고 있따
require('./batman.js');
require('./superman');
console.log('-----------------');
// 같은 변수이름을 사용하여도 각각의 파일내에서 사용하기 때문에 정상적으로 출력된다.

// 모듈의 기초 형태
/*

(function(exports,require,module,__filename,__dirname){
  코드
})()

*/
// ()() -> 함수의 자동실행 형태
(function(){
  const superHero = 'Superman';
  console.log(superHero);
})()
console.log('-----------------');

