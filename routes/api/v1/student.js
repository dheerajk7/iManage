const express = require('express');
const router = express.Router();

const studentController = require('../../../controllers/api/v1/student_controller');

//handle student routes

// get student list
router.get('/', studentController.getStudents);

// creating student
router.post('/register', studentController.create);

//getting interview detail with student id
router.get('/:student_id/interviews', studentController.getInterviews);

module.exports = router;
