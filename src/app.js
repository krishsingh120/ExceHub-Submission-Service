const fastifyPlugins = require("fastify-plugin");
const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");
const repositoryPlugin = require("./repositories/repositoryPlugin");
const serverAdapter = require("./config/bullBoardConfig");

// plugins are promise based in fastify, so use async await.
async function app(fastify, options) {
  await fastify.register(cors, {});
  await fastify.register(repositoryPlugin)
  await fastify.register(servicePlugin);
  await fastify.register(serverAdapter.registerPlugin(), {prefix: "/admin/queues"})
  // register test routes\
  await fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });

  // Todo routes
  await fastify.register(require("./routes/api/v1/SubmissionRoutes"), { prefix: "/api" });

  
}

module.exports = fastifyPlugins(app);
