window.onload = async () => {
    const output = document.getElementById('output');
    // load data into div output
    try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        output.innerHTML = 
        `   <h1>Data Showed as follow: </h1><br>
            <ul class="border border-1 p-3 bg-light rounded">
                ${data.map(p => 
                    `<li class="list-unstyled border text-bg-light p-3 rounded shadow">
                    ${p.title}<br>ID: ${p.id}<br>
                    <button type="button" data-id="${p.id}" class="btn btn-danger w-100 delete-btn">Delete</button>
                    </li>
                    `)}
            </ul>
        `;

        // Add event listeners to all delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                const id = e.target.dataset.id;

                try {
                    await fetch(`http://localhost:3000/posts/${id}`, {
                        method: 'DELETE'
                    });
                    // Reload the list after deleting
                    window.onload();
                } catch (err) {
                    console.error('Failed to delete', err);
                }
            });
        });

    } catch (error) {
        console.error('Failed to fetch', error);
    }
};

  