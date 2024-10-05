function showAlert(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;

  const alertMessage = `Thank you, ${name}! Your message has been sent.`;

  alert(alertMessage);

  document.getElementById("contactForm").reset();

  return false;
}
