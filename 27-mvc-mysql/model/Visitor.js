// (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//     return [
//       { id: 1, name: '홍길동', comment: '내가 왔다.' },
//       { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };    

const mysql = require('mysql');
const conn = mysql.createConnection({
  host : 'localhost',
  // user : 'root', // 외부에서 mysql을 접속하려고 할때 최상위 계정(root)으로의 비밀번호 접근을 허용하지 않는다.
  user : 'user',
  password : '1234',
  database : 'codingon',
}); // database 연결 객체


// database 연결 객체.query('가져올 sql문',(에러 ,결과)=>{})
exports.getVisitors = (callback)=>{
  conn.query(`SELECT *FROM visitor`,(err,rows)=>{ 
    if(err){
      throw err;
    }
    console.log('visitor.js : ',rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`, 
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model/Visitor.js >> ', rows);
      callback(rows.insertId)
    }
  )

}