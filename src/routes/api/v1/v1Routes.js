async function v1Plugins(fastify, options) {
  await fastify.register(require("./test/testRoutes"), { prefix: "/test" });
  await fastify.register(require("./SubmissionRoutes"), {
    prefix: "/submission",
  });
}

module.exports = v1Plugins;
