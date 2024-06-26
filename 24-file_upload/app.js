const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

// body-parser : 데이터를 쉽게 처리할 수 있도록 도와주는 라이브러리
// Post로 정보를 전송할 때 요청의 body(req.body)로 받을 수 있게 도와줌
// 단, 멀티파트 데이터(이미지, 동영상, 파일)를 처리하지 못한다
// 해결방법?  multer 이용
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// dest : 파일을 업로드하고 그 파일이 저장될 폴더 생성->uploads
// 이렇게 까지만하면 0fd4e4ab4c68d4aae8824863079f8772 이런형태의 파일로 저장이 된다. 해서 세부설정(파일명, 파일크기)을 직접 지정,제어하는 멀터 변수를 만들어야함.
// const upload = multer({
//     dest: 'uploads/',
// });

const uploadDetail = multer({
  // storage:저장할 공간에 대한 정보 , diskStorage:파일을 디스크에 저장하기 위한 모든 제어기능을 제공
  storage : multer.diskStorage({ 
    destination(req,file,done){ // destination:저장할 경로
      done(null,'uploads/');
    },
    filename(req,file,done){ // filename : 파일명
      const ext = path.extname(file.originalname);//파일의 확장자를 추출
      done(null,path.basename(file.originalname,ext) + Date.now() + ext)
      // 예를 들어, 파일 이름이 "uploads/profile.jpg"인 경우:
      // path.basename(file.originalname) 결과: "profile.jpg"
      // path.basename(file.originalname, '.jpg') 결과: "profile"
    },
  }),
  limits : {fileSize : 5*1024*1024},//limits : 파일 제한,fileSize : 파일 사이즈 제한
})
// 정적파일서비스(static 미들웨어) : /uploads 경로로 접근할 때 실제 uploads 폴더의 파일들을 서비스할 수 있도록 
// __dirname : 현재 실행 중인 스크립트 파일의 디렉토리 경로
app.use('/uploads', express.static(__dirname + '/uploads'));

// /static 경로는 클라이언트가 접근할 수 있는 URL 경로
// express.static(__dirname + '/public') 부분은 정적 파일을 제공할 디렉토리 경로
// 클라이언트가 /static 경로로 접근하면, 서버의 public 폴더 내에 있는 정적 파일(예: 이미지, CSS, JavaScript 파일 등)이 제공
app.use('/static', express.static(__dirname + '/public'));


// multer객체.single(): 하나의 파일을 업로드
// multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, req.file 객체 생성
app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
  console.log(req.body);
  console.log(req.file); //한개 req.file
  res.render('uploaded',{title : req.body.title, src: req.file.path});
})

// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.body); // { title: '파일 2개 업로드 중!!' }
  console.log(req.files); // [ {}, {}, ... ] 배열 형태로 각 파일 정보를 저장
  res.send('Success Upload!! (multiple)');
});

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
app.post('/upload/fields', uploadDetail.fields([{ name: 'kiwi' }, { name: 'orange' }]), (req, res) => {
  console.log(req.body); 
  console.log(req.files); //두개이상 req.files
  res.send('Success Upload!! (multiple2)');
});

// 동적 폼 업로드
app.post('/dynamicFile', uploadDetail.single('thumbnail'), (req, res) => {
  res.send(req.file);
})

app.get('/',(req,res)=>{
  res.render('index');
});

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});