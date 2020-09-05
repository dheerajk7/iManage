const mongoose = require('mongoose');

// creating student model
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  isPlaced: {
    type: String,
    required: true,
  },
  interview_result: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InterviewResults',
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
