// 파일 삭제
// const fs = require('fs');
// fs.unlink('newfile2.txt',function(){
//   console.log('파일삭제 완료');
// })

// ! 파일 이름 변경 ->왜 에러가 뜰까...
fs.rename('newfile2.txt','renamefile2.txt',function(err){
  if(err) throw err;
  console.log('파일이름 변경 완료');
})