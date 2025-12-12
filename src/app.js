const fastifyPlugins = require("fastify-plugin");
const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");

// plugins are promise based in fastify, so use async await.
async function app(fastify, options) {
  await fastify.register(cors, {});
  await fastify.register(servicePlugin);

  // register test routes\
  await fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });

  // Todo routes
  await fastify.register(require("./routes/todoRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugins(app);
