const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
  res.render('join',{title:'폼 실습하기(과제)'});
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})