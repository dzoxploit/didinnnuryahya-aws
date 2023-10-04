// kinesis-producer.js

const AWS = require("aws-sdk");

// Konfigurasi AWS SDK
AWS.config.update({ region: "us-east-1" }); // Sesuaikan dengan region Anda
const kinesis = new AWS.Kinesis();

// Data yang akan dikirim ke Kinesis
const data = {
  name: "John Doe",
  email: "johndoe@example.com",
  // Tambahkan atribut lain sesuai kebutuhan
};

const streamName = "UserRegistrationStream"; // Ganti dengan nama stream Anda

// Mengirim data ke Kinesis Data Stream
const params = {
  Data: JSON.stringify(data),
  PartitionKey: "some-key", // Gunakan kunci partisi yang sesuai
  StreamName: streamName,
};

kinesis.putRecord(params, (err, data) => {
  if (err) {
    console.error("Error sending data to Kinesis: ", err);
  } else {
    console.log("Data sent to Kinesis: ", data);
  }
});
