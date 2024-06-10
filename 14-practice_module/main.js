const http = require('http');
const url = require('url');
const fs = require('fs');


// url 모듈은 웹 주소를 읽어온다. 읽어온 내용을 구문 분석하여 주소의 각 부분으로 나누고 객체로 변환한다.
// https://nodejs.org/api/url.html

// var addr='http://localhost:8000/example.html?year=2024&month=feb';
// var addr='http://localhost:8000/demo.html?id=2024&pw=feb';

// 가상 주소 해석해보자
// var q = url.parse(addr,true);

// console.log(q.pathname);//example.html
// console.log(q.search);//?year=2024&month=feb

// var qdata = q.query;// '?year=2024&month=feb' 주소에서 이 부분을 쿼리라고 함.
// console.log(qdata);//[Object: null prototype] { year: '2024', month: 'feb' }
// console.log(qdata.month);//feb


// 127.0.0.1:8000/summer.html
http.createServer(function(req,res){
  var q = url.parse(req.url,true);
  var filename = '.'+q.pathname;

  fs.readFile(filename,function(err,data){
    if(err){
      res.writeHead(404,{'Content-Type':'text/html'});
      return res.end('404 Not found');
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })

}).listen(8000,()=>{
  console.log('8000번 서버 실행중');
})