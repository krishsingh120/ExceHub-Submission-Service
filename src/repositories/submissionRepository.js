const Submission = require("../models/submissionModel");

class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }

  async createSubmission(submissionPayload) {
    const response = await this.submissionModel.create(submissionPayload);
    return response;
  }
}


module.exports = SubmissionRepository;