const express = require('express');//express 모듈가져오기
const app = express();// express 애플리케이션 객체 생성
const PORT = 8888;// 서버가 실행될 포트번호 (높은자리숫자로 정하기)

app.set('view engine','ejs');// 뷰엔진이 ejs임을 알려줌
app.set('views','./views');// 뷰들이 위치하게 될 폴더 위치를 알려줌

// 미들웨어(Middleware) 연결
// : 중간에 있는 모든것 -> 요청(reqest)과 응답(reponse)의 중간에서 작업한
// express에서는 app.use()로 등록해야함

// body-parser 모듈
app.use(express.urlencoded({extended:true})); //urlencoded로 파싱된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 풀어헤친다(=파싱한다)
app.use(express.json());// 요청의 body 객체에 json형태로 온다.

// 라우팅(Routing) 주소를 설정한다.

app.get('/',(req,res)=>{
  res.render('index',{title:'폼 실습해보기'});
})

app.get('/getForm',(req,res)=>{
  console.log(req.query);//{ id: 'banana', pw: '1234' }
  // res.send('get 요청 성공!');
  res.render('result',{title:'get 요청 결과',userInfo : req.query}); 
  // userInfo : req.query == userInfo : { id: 'banana', pw: '1234' }
})
// http://localhost:8888/getForm?id=banana&pw=1234
// input의 name값과 사용자 입력값이 url에 해당 정보를 포함하고 전송

app.post('/postForm',(req,res)=>{
  console.log(req.body);//undefined -> 왜? body-parser 미들웨어를 사용하지 않았기 때문!
  // res.send('post 요청 성공!');
  res.render('result',{title:'post 요청 결과',userInfo:req.body})
})
// http://localhost:8888/postForm



// * res.render(뷰, 데이터) : 템플릿 엔진을 사용해서 서버측에서 동적으로 html 을 생성하고 클라이언트에게 응답
// 뷰 : views폴더의 ejs 파일을 연결 / 데이터 : 뷰 넣어줄 정보
// ->서버측에서 동적으로 페이지를 렌더링 할때 render()

// * res.send() : 문자열, JSON, 파일 등을 클라이언트에게 응답 (JSON을 가장 많이 응답)
// ->서버가 데이터를 응답할 때 send()


// listen(포트번호, 서버가 실행되었을때 실행할 콜백함수) : 서버 시작 메서드
app.listen(PORT,()=>{
  console.log(`start server! http://localhost:${PORT}`);
})