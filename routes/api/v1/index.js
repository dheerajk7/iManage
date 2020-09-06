const express = require('express');
const router = express.Router();

//accessing employee related routes
router.use('/employee', require('./employee'));
router.use('/company', require('./company'));
router.use('/student', require('./student'));
router.use('/result', require('./result'));
router.use('/interview', require('./interview'));

module.exports = router;
