document.getElementById('myForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price })
        });

        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <strong>Data Coming From API:</strong><br>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
        resultDiv.classList.remove('d-none');
    } catch (error) {
        console.error('Form data was not sent successfully!', error);
        resultDiv.innerHTML = `<strong style="color:red;">Error:</strong> ${error.message}`;
        resultDiv.classList.remove('d-none');
    }
});
