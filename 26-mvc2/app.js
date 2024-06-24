const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 라우터 불러오기 
const indexRouter = require('./routes/index');// index폴더는 생략가능 ./routes 까지 쓰면 해당폴더의 index폴더를 알아서 찾아서 경로설정
app.use('/',indexRouter);




// 404
// 맨 마지막 라우트(주소)로 선언해야한다. 그렇지 않으면 나머지 라우팅(주소를 설계한 행위)이 전부 무시된다.
app.get('*',(req,res)=>{
  res.render('404')
});

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});