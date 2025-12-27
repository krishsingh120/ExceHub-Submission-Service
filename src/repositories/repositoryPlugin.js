const fastifyPlugin = require("fastify-plugin");

const SubmissionRepository = require("./submissionRepository");

const repositoryPlugin = async (fastify, options) => {
  fastify.decorate("submissionRepository", new SubmissionRepository());
};

module.exports = fastifyPlugin(repositoryPlugin);
