// lambda_function.js

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

exports.handler = async (event) => {
  for (const record of event.Records) {
    const userData = JSON.parse(record.kinesis.data);

    // Perform data validation here

    // Prepare data for DynamoDB
    const params = {
      TableName: "YourDynamoDBTableName",
      Item: {
        // Define DynamoDB attributes here
        userId: { S: userData.email }, // Assuming email is used as the unique identifier
        name: { S: userData.name },
        email: { S: userData.email },
        // Add more attributes as needed
      },
    };

    try {
      await dynamodb.putItem(params).promise();
      console.log(`Data stored in DynamoDB: ${JSON.stringify(userData)}`);
    } catch (error) {
      console.error("Error storing data in DynamoDB: ", error);
    }
  }
};
