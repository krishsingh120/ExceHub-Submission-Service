const axiosInstance = require("../config/axiosInstance");

async function fetchProblemDetails(problemId) {
  try {
    const uri = "/api/v1/problem";

    console.log(uri + `/${problemId}`);

    const response = await axiosInstance.get(uri + `/${problemId}`);
    console.log("Api response", response);

    return response;
  } catch (error) {
    console.log("Something went wrong while fetching problem details");
    console.log(error);
  }
}

module.exports = fetchProblemDetails;
