const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const { sequelize } = require('./models'); //db객체중에서 sequelize 꺼내옴

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/',router);

// 프로미스(Promise)를 반환한다!! (.then()을 붙여서 결과값 사용 가능)
sequelize
  // force : true ;서버실행때마다 테이블을 재생성
  // force : false ;서버실행시 테이블이 없으면 생성
  .sync({ force : true })
  .then(()=>{
    app.listen(PORT,()=>{
      console.log('database connection succeede!');
      console.log(`http://localhost:${PORT}`);
    })
    
  })
  .catch((err)=>{
    console.log(err);
  })