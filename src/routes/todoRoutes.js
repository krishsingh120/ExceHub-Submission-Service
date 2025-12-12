
const todoRoutes = async (fastify, options) => {
  fastify.get("/todo", (req, res) => {
    return res.status(200).send({ data: ["todo", "todos"] });
  });
};

module.exports = todoRoutes;
