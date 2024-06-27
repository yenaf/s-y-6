const User = require('../model/User');


exports.main = (req,res)=>{
  res.render('index',{title : '실습 . 회원가입과 로그인 DB 연동'});
}

exports.postSignin = (req,res)=>{
  res.render('signin',{title : '로그인'});
}

exports.postSignup = (req,res)=>{

  User.postSignup(req.body,(result)=>{
    console.log('model/User.js : ',result);
    res.render('signup',{title : '회원가입'});
  })
}