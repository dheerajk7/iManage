const Company = require('../../../models/company');

// getting all the companies from DB
module.exports.getCompanies = async function (reqest, response) {
  try {
    let companies = await Company.find({});
    return response.status(200).json({
      success: true,
      data: {
        companies: companies,
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

// handle creating a new company
module.exports.create = async function (request, response) {
  try {
    let requestEmail = request.body.email.toLowerCase();
    let company = await Company.findOne({ email: requestEmail });
    if (company) {
      return response.status(422).json({
        success: false,
        message: 'Company Already exist with this Email',
      });
    }
    company = await Company.create({
      email: requestEmail,
      name: request.body.name,
      address: request.body.address,
      phone: request.body.phone,
    });

    if (company) {
      return response.status(200).json({
        success: true,
        message: 'Company Registered Successfully',
      });
    } else {
      return response.status(422).json({
        success: false,
        message: 'Error in Registering this company',
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
