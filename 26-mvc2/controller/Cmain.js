// const Comment = require('../model/Comment');
const {getDbComments} = require('../model/Comment');

console.log(getDbComments())

// 콜백함수

exports.getMain = (req, res) => {
  res.render('index',{title : 'MVC패턴'});
}

exports.getComments = (req,res)=>{
  res.render('comments',{comments :getDbComments()})//{comments : comments}
}

exports.getComment = (req,res)=>{
  console.log(req.params); //브라우저에서 엔터치면? 요청 { id: '1' }
  console.log(req.params.id);

  // 댓글 id : 요청 주소로 들어온 매개변수
  const commentId = req.params.id;
  const dbComments = getDbComments();
  console.log(dbComments[commentId - 1]);

  // 존재하지 않는 id에 대해서 요청할 때, 404처리
  if(!dbComments[commentId - 1]){ // !undefined => true
    return res.render('404');
  }

  res.render('comment',{dbComments : comments[commentId - 1]});
}