var http = require('http');
var url = require('url');
var fs = require('fs');

// console.log(http);
// console.log(url);
// console.log(fs);

// 리퀘스트 = 사용자 요청 request
// 리스폰스 = 응답 response


http.createServer(function(req,res){
  var u = url.parse(req.url, true);
  var filename = '.'+u.pathname;

  fs.readFile(filename,function(err,data){
    if(err){
      res.writeHead(404,{'Content-Type':'text/html'});
      res.write('404 Not Found');
      return res.end('File not found');
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
  
}).listen(3000,()=>{
  console.log('3000 서버 실행중');
})
