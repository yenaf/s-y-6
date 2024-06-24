// 요청코드 라우터

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
const {getMain,getComments,getComment} = require('../controller/Cmain');

// console.log(controller);
// {
//   getMain: [Function (anonymous)],
//   getComments: [Function (anonymous)],
//   getComment: [Function (anonymous)]
// }


router.get('/', getMain);

router.get('/comments', getComments);

// 콜론(:) : 요청의 주소에서 "변수"를 사용하는 방법
// /comment/:id 동적라우팅
router.get('/comment/:id', getComment);


// 라우터 모듈 내보내기
module.exports = router;
