// uploads폴더,views폴더 만들기
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const PORT = 8000;

// 뷰 템플릿 등록
app.set('view engine','ejs');
app.set('views','./views');

// body-parser 미들웨어 등록
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// multer 미들웨어 등록
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use('/static',express.static(__dirname + '/public'));

// multer 객체
const uploadDetail = multer({
  storage : multer.diskStorage({ 
    destination(req,file,done){
      done(null,'uploads/');
    },
    filename(req,file,done){
      const ext = path.extname(file.originalname);
      const fileNameExt = req.body.userId + ext; // 유저아이디.확장자 로 파일저장
      done(null,fileNameExt);
    },
  }),
  limits : {fileSize : 5*1024*1024},
})


app.post('/upload',uploadDetail.single('userFile'),(req,res)=>{
  console.log(req.body);
  console.log(req.file);
  res.render('result',{
    title : '가입 완료!',
    userId : req.body.userId,
    userPw : req.body.userPw,
    userName : req.body.userName,
    userAge : req.body.userAge,
    userFile : req.file.path
  });
})

app.get('/',(req,res)=>{
  res.render('index',{title : '회원가입'});
})


app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})

