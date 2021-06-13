var AWS = require("aws-sdk");
const { getSupportedCurrencies, getSpotPriceOf } = require("./api.js");

const sendMessage = async (price) => {
  // Load the AWS SDK for Node.js
  // Set the region
  console.log("Configuring");
  AWS.config.update({ region: "us-east-1" });

  console.log("creating sqs");
  // Create an SQS service object
  var sqs = new AWS.SQS();
  console.log("creating object params");
  var params = {
    // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
    // MessageGroupId: "Group1",  // Required for FIFO queues
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/716471143025/price-sqs",
  };
  console.log("About to send messages");
  sqs.sendMessage({ ...params, MessageBody: JSON.stringify(price) }).promise();
};

exports.handler = async (event) => {
  const btcUsdPRice = await getSpotPriceOf({
    baseToken: "BTC",
    secondaryToken: "USD",
  });
  console.log("About to call send msg function");
  await sendMessage(btcUsdPRice);
  console.log("Return from sending msg");
  return { btcUsdPRice };
};
