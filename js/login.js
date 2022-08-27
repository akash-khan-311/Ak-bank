document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if (userEmail.value == 'baperBank@gmail.com' && userPassword.value == 'baperbank') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid Email And Password')
    }
})