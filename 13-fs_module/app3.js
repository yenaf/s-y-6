const fs = require('fs');

// 파일 내용 읽기
// fs.readFile('./input.txt','utf-8',function(err,data){
//   console.log(data);
// })


// fs.readFile('./input.txt',function(err,data){
//   console.log(data);
// })

// 두번째 인자인 'utf-8' 뺐을때 결과 : <Buffer 31 31 31 0d 0a 32 32 32 0d 0a 33 33 33 0d 0a>
// 숫자, 영어, 특수문자 -> 1바이트
// <Buffer 31 32 33 0d 0a 61 62 63 0d 0a 0d 0a ec 95 88 eb 85 95 ed 95 98 ec 84 b8 ec 9a 94 20 eb b0 98 ea b0 91 ec 8a b5 eb 8b 88 eb 8b a4 2e 0d 0a ec 95 88 eb ... 678 more bytes>


// 파일 내용 읽기
const data = fs.readFileSync('./input.txt','utf-8');
console.log(data);

console.log('파일 읽기 완료');
