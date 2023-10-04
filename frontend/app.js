// app.js
document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform client-side validation here (e.g., check email format, password strength)

    // Prepare data to send to Kinesis Data Stream
    const userData = {
      name,
      email,
      password,
    };

    // Send data to AWS Kinesis Data Stream (make sure to replace 'YOUR_KINESIS_STREAM_ENDPOINT')
    try {
      const response = await fetch("YOUR_KINESIS_STREAM_ENDPOINT", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Registration successful!");
        registrationForm.reset();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data to Kinesis: ", error);
      alert(
        "An error occurred while processing your request. Please try again later."
      );
    }
  });
});
