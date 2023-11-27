function openLoginForm() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function openSignupForm() {
    document.getElementById('signup-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModals() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}