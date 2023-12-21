
  function submitForm() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // Simple message length validation
    if (message.length < 10) {
      errorMessage.textContent = 'Message should be at least 10 characters long.';
      return;
    }

    // Reset error message if validation passes
    errorMessage.textContent = '';

    // You can add further logic here for form submission
    // For this example, we'll just display an alert
    alert('Form submitted!');
  }
