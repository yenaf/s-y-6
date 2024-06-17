const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
  res.render('dynamic',{title:"dynamic : 동적 폼 배워보자"});
})

// ajax
app.get('/ajax',(req,res)=>{
  console.log(req.query);
  res.send(req.query);
})

app.post('/ajax',(req,res) => {
  console.log(req.body);
  res.send(req.body);
})

// axios
app.get('/axios',(req,res)=>{
  console.log(req.query);
  res.send(req.query);
})

app.post('/axios',(req,res) => {
  console.log(req.body);
  res.send(req.body);
})

// fetch
app.get('/fetch',(req,res)=>{
  console.log(req.query);
  res.send(req.query);
})

app.post('/fetch',(req,res) => {
  console.log(req.body);
  res.send(req.body);
})



app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})

// 400번대 ? 에러 클라이언트에러
// 404 : 찾을 수 없다~ 존재하지않는것을 요청 404
// 500번대 ? 에러 서버 에러
// 200번대 ? 성공을 의미
