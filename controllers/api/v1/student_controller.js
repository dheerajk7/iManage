const Student = require('../../../models/student');

//registering new student
module.exports.create = async function (request, response) {
  try {
    let student = await Student.create({
      name: request.body.name,
      batch: request.body.batch,
      course: request.body.course,
      isPlaced: request.body.isPlaced,
    });
    if (student) {
      return response.status(200).json({
        success: true,
        message: 'Student Registered Successfull',
      });
    } else {
      return respsonse.status(200).json({
        success: false,
        message: 'Error in registering new student',
      });
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// getting all the student from database and sending them as response
module.exports.getStudents = async function (request, response) {
  try {
    let students = await Student.find({});
    return response.status(200).json({
      success: true,
      data: {
        students: students,
      },
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// handle employee authentication
module.exports.getInterviews = async function (reqest, response) {
  try {
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
