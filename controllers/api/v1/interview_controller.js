const InterviewResult = require('../../../models/interviewResult');
const Interview = require('../../../models/interview');

// handle getting interviews and sending them as response
module.exports.getInterviews = async function (request, response) {
  try {
    let interview = await Interview.find({}).populate('company');
    return response.status(200).json({
      success: false,
      data: {
        interview: interview,
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

// creating new interview
module.exports.create = async function (request, response) {
  try {
    let interview = await Interview.create({
      date: request.body.date,
      type: request.body.type,
      company: request.body.company,
    });
    for (let std of request.body.students) {
      let interviewResult = await InterviewResult.create({
        interview: interview.id,
        student: std,
        status: 'Not Available',
      });
      interview.results.push(interviewResult.id);
    }
    interview.save();
    return response.status(200).json({
      success: true,
      messsage: 'Interview Created Successfully',
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// getting interview detail with id
module.exports.getInterviewsDetail = async function (request, response) {
  try {
    let interview = await Interview.findById(
      request.params.interview_id
    ).populate({
      path: 'company',
      path: 'results',
      populate: {
        path: 'student',
      },
    });
    if (interview) {
      return response.status(200).json({
        success: true,
        data: {
          interview: interview,
        },
      });
    } else {
      return response.status(422).json({
        success: false,
        messsage: 'Interview not available with these id',
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
