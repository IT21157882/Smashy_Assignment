
// Script.js

// Add an event listener to the email input for validation
const emailInput = document.getElementById("emailaddress");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("blur", function () {
    if (!isValidEmail(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.style.color = "red"; // Change the input text color to red
    } else {
        emailError.style.display = "none";
        emailInput.style.color = "black"; // Reset the input text color
    }
});

function isValidEmail(email) {
    // Use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailRegex.test(email);
}


