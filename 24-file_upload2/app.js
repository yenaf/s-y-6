const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.render('index',{title : '회원가입(파일업로드)'});
})

app.post('/upload',(req,res)=>{
  console.log(req.body);
  res.render('result');
})

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})