// post 방식으로 정보받기
const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
  res.render('join2',{title:'회원가입'});
})

app.post('/postForm',(req,res)=>{
  console.log(req.body);
  res.render('profile2',{title:'회원정보',userInfo:req.body});
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})