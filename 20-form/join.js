// get 방식으로 정보받기
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
  res.render('join',{title:'회원가입'});
})

app.get('/getForm',(req,res)=>{
  console.log(req.query);
  res.render('profile',{title:'회원정보',userInfo : req.query});
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})