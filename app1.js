function addLabels() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Check if labels exist, otherwise create them
    if (!usernameInput.previousElementSibling) {
        const usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username:';
        usernameLabel.setAttribute('for', 'username');
        usernameInput.parentNode.insertBefore(usernameLabel, usernameInput);
    }

    if (!passwordInput.previousElementSibling) {
        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password:';
        passwordLabel.setAttribute('for', 'password');
        passwordInput.parentNode.insertBefore(passwordLabel, passwordInput);
    }

    if (!confirmPasswordInput.previousElementSibling) {
        const confirmPasswordLabel = document.createElement('label');
        confirmPasswordLabel.textContent = 'Confirm Password:';
        confirmPasswordLabel.setAttribute('for', 'confirmPassword');
        confirmPasswordInput.parentNode.insertBefore(confirmPasswordLabel, confirmPasswordInput);
    }
}

// Ensure the login button is at the bottom
const loginButton = document.querySelector('#loginForm button');
if (loginButton) {
    loginButton.style.position = 'absolute';
    loginButton.style.bottom = '0';
}

// Call the function to add labels
addLabels();

// Prevent form submission and show an alert
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const form = document.getElementById('loginForm');
const feedbackMessage = document.createElement('div');
feedbackMessage.id = 'passwordFeedback';
passwordInput.parentNode.appendChild(feedbackMessage);

passwordInput.addEventListener('input', function() {
    validatePassword();
    
    
    
    // Reset feedback message
    feedbackMessage.textContent = 'Make sure that your password meets the criteria';
    
    // Define password criteria
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z\d]/.test(password);
    

    // Display feedback based on password quality
    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
        feedbackMessage.textContent = "Strong password: Contains uppercase, lowercase, numbers, and special characters.";
    } else if (password.length >= 8 && (hasUppercase || hasLowercase || hasNumber || hasSpecialChar)) {
        feedbackMessage.textContent = "Good password: Contains at least one uppercase letter, lowercase letter, number, or special character.";
    } else {
        feedbackMessage.textContent = "Weak password: Please include uppercase letters, lowercase letters, numbers, and special characters.";
    }

});


form.addEventListener('submit', function(event) {
    const password = passwordInput.value;
    if (!(password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
        event.preventDefault();
        alert('Your password does not meet the criteria.');
    }
});