document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const userData = {
        username: username,
        email: email
    }
})