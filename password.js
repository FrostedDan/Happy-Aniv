// Run when page loads
window.onload = function () {

  // Check if user is already logged in
  if (localStorage.getItem("loggedIn") === "true") {
    showContent();
  }

};

// Check password
function checkPassword() {

  // Your password
  var correctPassword = "Niknikk0122";

  // Get user input
  var inputPassword = document.getElementById("passwordInput").value;

  // Compare passwords
  if (inputPassword === correctPassword) {

    // Save login state
    localStorage.setItem("loggedIn", "true");

    // Show protected content
    showContent();

  } else {

    alert("Wrong password");

  }
}

// Show content and hide login form
function showContent() {

  document.getElementById("login").style.display = "none";
  document.getElementById("content").style.display = "block";

}

// Logout function
function logout() {

  // Remove saved login state
  localStorage.removeItem("loggedIn");

  // Reload page
  location.reload();

}