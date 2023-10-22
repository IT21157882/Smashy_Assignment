function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Basic validation,
  if (firstName === "" || lastName === "" || email === "" || address === "") {
    alert("All fields are required");
    return false;
  }

  // Additional validation for email (regex pattern)
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

$(document).ready(function () {
  $("form").on("submit", function (e) {
    if (!validateForm()) {
      e.preventDefault();
    } else {
    }
  });

  $(".back").on("mousemove", function (e) {
    var X = e.pageX - $(this).offset().left - $(this).outerWidth() / 2,
      Y = e.pageY - $(this).offset().top - $(this).outerHeight() / 2,
      xSet = X / 60,
      ySet = Y / 60;

    $(this).css("background-position", " " + xSet + "px " + ySet + "px ");
  });
});

/// Add an event listener to the email input for validation
const emailInput = document.getElementById("emailaddress");
const emailError = document.getElementById("emailError");

// Track whether there is an error
let hasError = false;

emailInput.addEventListener("input", function () {
  if (!isValidEmail(emailInput.value)) {
    emailError.style.display = "block";
    emailInput.style.color = "red"; // Change the input text color to red for invalid emails
    hasError = true; // Set the error flag
  } else {
    emailError.style.display = "none";
    if (!hasError && emailInput.value.trim() !== "") {
      emailInput.style.color = "black"; // Change the input text color to black for valid emails (without an error and not empty)
    } else {
      hasError = false; // Reset the error flag when the input is not empty and valid
    }
  }
});

function isValidEmail(email) {
  // Use a regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  return emailRegex.test(email);
}
