// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Hardcoded username and password for demonstration
    const correctUsername = 'user';
    const correctPassword = 'password123';
    
    if (username === correctUsername && password === correctPassword) {
        // alert('Login successful');
        window.location.href = 'index2.html';  // Redirect to a new page
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
