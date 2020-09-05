const express = require('express');
const router = express.Router();

//accessing API routes
router.get('/', function (req, res) {
  return res.status(200).json({
    success: true,
    message: 'We are on',
  });
});

module.exports = router;
