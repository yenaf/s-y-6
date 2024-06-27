const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser')

router.get('/',controller.main);

router.get('/signin',controller.postSignin);

router.post('/signup',controller.postSignup);

module.exports = router;