const express = require('express');
const router = express.Router();

const resultController = require('../../../controllers/api/v1/result_controller');

//handle result routes
// update result
router.post('/:resultId/update', resultController.update);

module.exports = router;
