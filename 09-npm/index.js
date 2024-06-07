// http : 웹 서버를 구동하기 위한 node.js 내장 웹 모듈
// http 모듈 불러오기
const http = require('http');
// console.log(http);

// http모듈이 가지고 있는 서버 만드는 기능을 사용해보자
const server = http.createServer();

// listen : 
server.listen(8000,function(){
  console.log('8000 포트에서 서버 실행 중');
})

// 로컬 서버 127.0.0.1