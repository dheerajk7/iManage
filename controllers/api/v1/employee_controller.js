const Employee = require('../../../models/employee');
const jwt = require('jsonwebtoken');

// handle create employee
module.exports.create = async function (request, response) {
  try {
    let requestEmail = request.body.email.toLowerCase();
    let user = await Employee.findOne({ email: requestEmail });
    if (user) {
      return response.status(422).json({
        success: false,
        message: 'Employee Already exist with this Email',
      });
    }
    if (request.body.password != request.body.confirmPassword) {
      return response.status(422).json({
        success: false,
        message: 'Password not matched',
      });
    }

    let employee = await Employee.create({
      email: requestEmail,
      password: request.body.password,
      name: request.body.name,
    });

    if (employee) {
      return response.status(200).json({
        success: true,
        message: 'Employee Created Successfully',
      });
    } else {
      return response.status(422).json({
        success: true,
        message: 'Error in creating Employee',
      });
    }
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// handle employee authentication
// create session for employee
module.exports.createSession = async function (request, response) {
  try {
    //finding user with phone number or email
    let email = request.body.email.toLowerCase();
    let user = await Employee.findOne({ email: email });
    if (!user) {
      return response.status(401).json({
        success: false,
        message: 'Invalid Credentials...Register if not registered yet',
      });
    }
    if (user.password === request.body.password) {
      return response.status(200).json({
        data: {
          token: jwt.sign(user.toObject(), 'imanage', {
            expiresIn: 100000,
          }),
        },
        message: 'Sign In successful,here is your token, keep it safe',
        success: true,
      });
    } else {
      return response.status(422).json({
        success: true,
        message: 'Invalid Credentials',
      });
    }
  } catch (err) {
    console.log('error', err);
    return response.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
