const SubmissionProducers = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // inject some here
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async addSubmission(submission) {
    const submissionResponse = await this.submissionRepository.createSubmission(
      submission
    );

    if (!submissionResponse) {
      // TODO: Add error handling
      throw new { message: "Not able to create submission" }();
    }
    console.log(submissionResponse);

    const response = await SubmissionProducers(submission);
    return { queueResponse: response, submissionResponse };
  }
}

module.exports = SubmissionService;
