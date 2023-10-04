// app.js

// Import fungsi-fungsi dari kinesis-consumer.js dan lambda_function.js
const kinesisConsumer = require("./backend/kinesis/kinesis-consumer");
const lambdaFunction = require("./backend/lambda/lambda_function");

// Menjalankan fungsi kinesisConsumer
kinesisConsumer.putRecord(); // Gantilah dengan nama fungsi yang sesuai

// Menjalankan fungsi lambdaFunction
lambdaFunction.handler(); // Gantilah dengan nama fungsi yang sesuai
