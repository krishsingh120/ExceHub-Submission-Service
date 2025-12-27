const fastifyPlugin = require("fastify-plugin");

const SubmissionService = require("./submissionService");

const servicePlugin = async (fastify, options) => {
  fastify.decorate(
    "submissionService",
    new SubmissionService(this.submissionRepository)
  );
};

module.exports = fastifyPlugin(servicePlugin);
