const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> read one -> update

// GET / => localhost:PORT/
router.get('/', controller.main);

// POST / visitor
router.post('/visitor',controller.postVisitor)

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

// DELETE / visitor
router.delete('/visitor', controller.deleteVisitor);


// GET /visitor/:id
router.get('/visitor/:id', controller.getVisitor); // 하나 조회

// PATCH /visitor
router.patch('/visitor', controller.patchVisitor); // 하나 수정




// PUT / visitor
// router.put('/visitor',controller.updateVisitor)


module.exports = router;
