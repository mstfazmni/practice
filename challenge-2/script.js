window.onload = async () => {
    const output = document.getElementById('output');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error(`Failed fetching data: ${response.status}`);
        }
        const data = await response.json();
        firstFivePosts = data.slice(0, 5);

        output.innerHTML = 
        `
            <h2>First 5 posts from mock API as follows: </h2><br>
            <ul>
                ${firstFivePosts.map(post => `<li class="text-bg-dark rounded shadow p-3">${post.title}<br>${post.body}</li>`)}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching posts from server:', error);
    }
    
};