async function v1Plugins(fastify, options) {
  await fastify.register(require("./test/testRoutes"), { prefix: "/test" });
}

module.exports = v1Plugins;
