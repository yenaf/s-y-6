// Response 객체
// writeHead : 응답 헤더 작성
// write : 응답 본문 작성
// end : 응답 본문 작성 후 응답 종료

// listen(port, callback) : 서버를 첫번째 매개변수의 포트로 실행한다.
const http = require('http');
http.createServer(function(request,response){
  var url = request.url;
  response.writeHead(200,{'Content-Type':'text/html'})
  response.write(`<h2>hello kang yena</h2>`)
  response.end(`<p>${url}</p>`)
}).listen(3000,()=>{
  console.log('3000포트 실행 중');
})