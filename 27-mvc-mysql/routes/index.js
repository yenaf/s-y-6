const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> update

// GET / => localhost:PORT/
router.get('/', controller.main);

// POST / visitor
router.post('/visitor',controller.postVisitor)

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

module.exports = router;
