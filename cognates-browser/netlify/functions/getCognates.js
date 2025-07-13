const raw = require("./data/cognates.json");
const data = Array.isArray(raw) ? raw : [raw]; // force into array if single object

exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data),
  };
};
