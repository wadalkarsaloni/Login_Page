function register() {
	// Get form input values
	var fullname = document.getElementById("fullname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
  
	// Validate form input
	if (fullname == "" || email == "" || password == "") {
	  alert("Please fill in all fields.");
	  return;
	}
  
	// Create account (you can replace this with your own account creation logic)
	alert("Account created successfully for " + fullname + ".");
  
	// Clear form input
	document.getElementById("fullname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
  }
  
  function login() {
	// Show login form (you can create a separate login form and display it here)
	alert("Sorry, there is no login form in this example.");
  }