async function sendMail() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let msg = document.getElementById("sms").value;

  if (name === "" || email === "" || msg === "") {
    showAlert("error");
    return;
  }

  let prams = { name, email, msg };
  try {
    await emailjs.send(
      "service_1sebw7w",
      "template_a9bfuuw", 
      prams
    );

    showAlert("success");
    return true;


  } catch (err) {
    showAlert("error");
    return false;
  }
}

function showAlert(type) {
  const alert = document.getElementById("alert-" + type);
  const bar = document.getElementById("bar-" + type);

  alert.classList.remove("hidden");
  bar.style.transition = "none";
  bar.style.width = "100%";

  setTimeout(() => {
    bar.style.transition = "width 3s linear";
    bar.style.width = "0%";
  }, 50);

  setTimeout(() => {
    alert.classList.add("hidden");
  }, 3000);
}
