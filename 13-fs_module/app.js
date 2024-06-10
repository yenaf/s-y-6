const fs = require('fs');
// console.log(fs);
// 형식 : fs.mkdir(path, module, callback)

const path = require('path');

// 디렉토리 생성
// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//   if(err){
//     return console.error();
//   }
//   console.log('디렉토리 생성완료');
// })

// 디렉토리 삭제
fs.rmdir(path.join(__dirname,'test'),(err)=>{
  if(err){
    return console.error();
  }
  console.log('디렉토리 삭제완료');
})

// https://nodejs.org/api/fs.html
