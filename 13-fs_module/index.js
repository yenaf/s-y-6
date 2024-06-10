

const fs = require('fs'); // 파일관리 모듈
const path = require('path'); // 경로관리 모듈
// console.log(fs);

// demo 파일 만들기
// fs.mkdir(path.join(__dirname,'demo'),(err)=>{
//   if(err){
//     return console.error(err);
//   }
//   console.log('데모파일 생성 완료');
// })

// demo 파일 삭제하기
fs.rmdir(path.join(__dirname,'demo'),(err)=>{
  if(err){
    return console.error(err);
  }
  console.log('데모파일 삭제 완료');
})