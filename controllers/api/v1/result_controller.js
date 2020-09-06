const Result = require('../../../models/interviewResult');

// handle employee authentication
module.exports.update = async function (request, response) {
  try {
    let result = await Result.findByIdAndUpdate(request.params.result_id);
    if (!result) {
      return response.status(200).json({
        success: false,
        message: 'Result not found with this ID',
      });
    }
    result.status = request.body.status;
    result.save();
    return response.status(200).json({
      success: true,
      message: 'Result update Successfully',
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
