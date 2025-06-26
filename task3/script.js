function validateFeedbackForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Clear previous messages
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";
  document.getElementById('successMessage').textContent = "";

  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required.";
    valid = false;
  }

  if (email === "") {
    document.getElementById('emailError').textContent = "Email is required.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').textContent = "Email is invalid.";
    valid = false;
  }

  if (message === "") {
    document.getElementById('messageError').textContent = "Feedback is required.";
    valid = false;
  }

  if (valid) {
    document.getElementById('successMessage').textContent = "Thank you! Your feedback has been submitted.";
    document.getElementById('feedbackForm').reset();
  }

  return false; // Prevent actual form submission for demo
}
