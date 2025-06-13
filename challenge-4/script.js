window.onload = async () => {
    const output = document.getElementById('output');
    // load data into div output
    try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        output.innerHTML = 
        `   <h1>Data Showed as follow: </h1><br>
            <ul class="border border-1 p-3 bg-light rounded">
                ${data.map(p => `<li class="list-unstyled border text-bg-light p-3 rounded shadow">${p.title}<br>ID: ${p.id}</li>`)}
            </ul>
        `;
    } catch (error) {
        console.error('Failed to fetch', error);
    }
    
};