document.getElementById('myForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const output = document.getElementById('output');

    const formData = {
        name: name,
        email: email,
        message: message
    }
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
    output.innerHTML = 
    `   <h2>Successfully Submitted!</h2><br>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
    output.classList.remove('d-none');

    } catch (error){
        console.error('Submititng error occurd', error);
    }
});