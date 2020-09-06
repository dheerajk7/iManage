// handle employee authentication
module.exports.getCompanies = async function (reqest, response) {
  try {
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// handle employee authentication
module.exports.create = async function (reqest, response) {
  try {
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
