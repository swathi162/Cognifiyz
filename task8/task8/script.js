function validateFeedbackForm() {
  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Reset error and success messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // Basic validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Email is invalid";
    valid = false;
  }

  if (message === "") {
    messageError.textContent = "Feedback is required";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    successMessage.textContent = "Feedback submitted successfully!";
    // Optionally clear the form
    document.getElementById("feedbackForm").reset();
  }

  return false; // Prevent actual form submission
}
