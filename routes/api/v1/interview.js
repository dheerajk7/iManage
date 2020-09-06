const express = require('express');
const router = express.Router();

const interview_controller = require('../../../controllers/api/v1/interview_controller');

//handle interview routes
//getting all interivews
router.get('/', interview_controller.getInterviews);

//create interview
router.post('/create', interview_controller.create);

// getting interview detail with ID
router.get('/:interview_id', interview_controller.getInterviewsDetail);

module.exports = router;
