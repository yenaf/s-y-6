const express = require('express');
// multer 모듈 불러오기
const multer = require('multer');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// __dirname 현재위치 출력

app.use('/uploads',express.static(__dirname + '/uploads'))
const upload = multer({
  dest : 'uploads/',
})


app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드 해보기' });
  });

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});