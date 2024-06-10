// 파일 읽기 및 생성방법

// * 현재 디렉토리의 파일이름 읽기
const fs = require('fs'); //파일 관리 모듈
// fs.readdir('./',function(err,files){
//   if(err){
//     console.log("에러",err);
//   }else{
//     console.log("결과",files);
//   }
// })

// 현재 디렉토리(폴더)가 가지고 있는 파일을 배열 형태로 반환
// 결과 [ 'app.js', 'app1.js', 'index.js' ]


// * writeFile() : 내용있는 파일생성
// fs.writeFile('newfile.txt','hello world', function(err){
//   if(err){
//     throw err;
//     }
//   console.log('파일이 생성됨');
// })

// * open() w? write의 약자 : 내용이 없는 빈파일을 생성
fs.open('newfile2.txt','w',function(err){
  if(err){
    throw err;
  }
  console.log('w 를 이용해서 파일이 생성됨');
})


// * appendFile() : 기존파일에 내용을 추가. newfile.txt라는 파일에 Kang 이라는 내용 추가
fs.appendFile('newfile.txt','Kang',function(err){
  if(err) throw err;
  console.log('파일의 내용을 추가함');
})



