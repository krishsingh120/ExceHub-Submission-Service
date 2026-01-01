const SubmissionProducers = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // inject some here
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submissionPayload) {
    console.log("Submission repo hit");

    // Hit the Problem Admin service and fetch the problem details.


    // we are going to create the entry in db.

    const submission = await this.submissionRepository.createSubmission(
      submissionPayload
    );

    if (!submission) {
      // TODO: Add error handling
      throw new { message: "Not able to create submission" }();
    }
    // console.log("this is submission response: ",submission);

    const response = await SubmissionProducers(submissionPayload);
    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
