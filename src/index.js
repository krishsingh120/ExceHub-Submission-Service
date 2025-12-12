const fastify = require("fastify")({ logger: false }); // calling the fastify constructor

const app = require("./app");

const PORT = 3000;

// fastify.get("/ping", async (req, res) => {
//   // controller function
//   res.send({ ping: "pong" });
// });

fastify.register(app);

const start = async () => {
  try {
    await fastify.listen({
      port: PORT,
      host: "0.0.0.0",
      bindHost: false,
    });
    console.log(`Server is listening on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
