const http = require('http');
http.createServer(function(req, res){
  // send http
  // http status(상태) 200은 정상정인 응답
  // Content-Type : text/plain
  // res.writeHead(200,{'Content-Type':'text/plain'})
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end(`<h2>hellow world</h2>`)
}).listen(8080,()=>{
  console.log('8080포트에서 실행 중');
});