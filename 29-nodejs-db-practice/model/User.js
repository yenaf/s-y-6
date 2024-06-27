const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'user',
  password : '1234',
  database : 'codingon',
});

exports.postSignup = (data,callback)=>{
  connection.query(`insert into user(userid, name, pw) 
    values('${data.userid}','${data.name}','${data.pw}')`),
    (err,rows) =>{
      if(err){
        throw err;
      }
      console.log('model/User.js : ',rows);
      callback(rows)
    }
}
