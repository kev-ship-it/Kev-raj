document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('login-message').textContent = `Welcome, ${username}! Ready to bite waste!`;
        document.getElementById('login-message').style.color = '#ffd700';
        setTimeout(() => window.location.href = 'index.html', 2000);
    } else {
        document.getElementById('login-message').textContent = 'Please enter both fields.';
        document.getElementById('login-message').style.color = '#d81b60';
    }
});

function simulateSocialLogin(provider) {
    document.getElementById('login-message').textContent = `Logging in with ${provider}...`;
    document.getElementById('login-message').style.color = '#ffd700';
    setTimeout(() => {
        document.getElementById('login-message').textContent = `Welcome via ${provider}! Ready to bite waste!`;
        setTimeout(() => window.location.href = 'index.html', 2000);
    }, 1000);
}