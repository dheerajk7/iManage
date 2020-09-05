const mongoose = require('mongoose');

// creating employee model
const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  name: {
    type: String,
    required: true,
  },
});

if (!employeeSchema.options.toObject) employeeSchema.options.toObject = {};

//customizing employee
employeeSchema.options.toObject.transform = function (doc, employee, options) {
  delete employee.password;
  delete employee.createdAt;
  delete employee.updatedAt;
  delete employee.__v;
  return employee;
};

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
