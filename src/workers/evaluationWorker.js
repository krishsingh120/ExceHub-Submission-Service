const { Worker } = require("bullmq");
const redisConnection = require("../config/redisConfig");
const axios = require("axios");

function evaluationWorker(queueName) {
  new Worker(
    queueName,
    async (job) => {
      if (job.name === "EvaluationJob") {
        console.log("evaluation job is : ", job.data);

        try {
          const response = await axios.post(
            "http://localhost:4000/sendPayload",
            {
              userId: job.data.userId,
              payload: job.data,
            }
          );
          console.log(response);
          console.log(job.data);
        } catch (error) {
          console.log(error);
        }
      }
    },
    {
      connection: redisConnection,
    }
  );
}

module.exports = evaluationWorker;
