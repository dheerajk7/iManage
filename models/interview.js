const mongoose = require('mongoose');

// creating employee model
const interviewSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  results: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InterviewResults',
    },
  ],
});

const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;
