window.onload = async () => {
    const output = document.getElementById('output');

    try {
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();

        output.innerHTML = 
        `
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    } catch (error) {
        console.log('Error fetching', error);
    }
    
};