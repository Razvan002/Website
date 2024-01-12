function openLoginForm() {
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('login-popup').style.display = 'block';
    document.getElementById('close-btn-login').style.display = 'block';
}

function openSignupForm() {
    document.getElementById('signup-btn').style.display = 'block';
    document.getElementById('register-popup').style.display = 'block';
    document.getElementById('close-btn-register').style.display = 'block';
}

function closeModals() {
    document.getElementById('close-btn-login').style.display = 'none';
    document.getElementById('close-btn-register').style.display = 'none';
    document.getElementById('login-popup').style.display = 'none';
    document.getElementById('register-popup').style.display = 'none';
}
