const apiPlugins = async (fastify, Option) => {
  await fastify.register(require("./v1/v1Routes"), { prefix: "/v1" });
};

module.exports = apiPlugins;
