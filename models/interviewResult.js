const mongoose = require('mongoose');

// creating employee model
const interviewResultSchema = new mongoose.Schema({
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interview',
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const InterviewResults = mongoose.model(
  'InterviewResults',
  interviewResultSchema
);
module.exports = InterviewResults;
