const Employee = require('../../../models/employee');

// handle create employee
module.exports.create = async function (request, response) {
  try {
    let requestEmail = request.body.email.toLowerCase();
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
module.exports.signIn = async function (reqest, response) {
  try {
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
