const { createSubmission } = require("../../../controllers/submissionController");

const submissionRoutes = async (fastify, options) => {
  fastify.post("/", createSubmission);
};

module.exports = submissionRoutes;
