async function v1Plugins(fastify, options) {
  await fastify.register(require("./SubmissionRoutes"), {
    prefix: "/submission",
  });
}

module.exports = v1Plugins;
