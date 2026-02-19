function sendMail() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let msg = document.getElementById("sms").value;


  if (name === "" || email === "" || msg === "") {
    alert("Please fill in all the fields before sending.");
    return;
  }

  let prams = {
    name: name,
    email: email,
    msg: msg,
  };

  emailjs
    .send("service_1sebw7w", "template_a9bfuuw", prams)
    .then(function (res) {
      alert("Success! Your Email Has Been Sent!");
    })
    .catch(function (err) {
      alert("Failed to send email. Please try again.");
    });
}
