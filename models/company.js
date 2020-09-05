const mongoose = require('mongoose');

// creating company model
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
