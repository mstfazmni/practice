document.getElementById('loginBtn').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;


    try {
        const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email})
    });

    if(!response.ok) {
        throw new Error(`Login Failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login Success: ', data);

    // after login succesfully direct user to tasks page
    window.location.href = "tasks.html";
    
    } catch (error) {
        console.error('Login Failed', error);
    }
    

})