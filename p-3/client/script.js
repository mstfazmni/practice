document.getElementById('loginBtn').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const userData = {
        username: username,
        email: email
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });

    if(!response.ok) {
        throw new Error(`Server is not responding: ${response.status}`);
    }

    const data = await response.json();
    // after login succesfully direct user to tasks page
    window.location.href = "tasks.html";
    
    } catch (error) {
        console.error('Error Posting data to server', error);
    }
    

})