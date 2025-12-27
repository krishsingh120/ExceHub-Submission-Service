const fastifyPlugin = require("fastify-plugin");
const { pingRequest } = require("../../../../controllers/submissionController");

async function testRoute(fastify, options) {
  await fastify.get("/ping", pingRequest);
}

module.exports = testRoute;
