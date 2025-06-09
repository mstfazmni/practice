document.getElementById('showTasksBtn').addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/tasks');
        if(!response.ok){
            throw new Error(`Failed to fetch Tasks form API: ${response.status}`);
        }

        const tasks = await response.json();
        console.log(tasks);
        const tasksDiv = document.getElementById('card-info');

        tasks.forEach((task) => {
            tasksDiv.innerHTML += 
            `<div class="col">
                <div class="card mb-2">
                    <div class="card-header">${task.title}</div>
                    <div class="card-body">
                        <div class="card-text">
                            ${task.info}
                        </div>
                    </div>
                    <div class="card-footer">Created by Mostafa Z.</div>
                </div>
            </div>    
            `;
        })
        // tasksDiv.innerHTML = 
        // `   <div class="col">
        //         <div class="card mb-2">
        //             <div class="card-header">${tasks.title}</div>
        //             <div class="card-body">
        //                 <div class="card-text">
        //                     ${tasks.info}
        //                 </div>
        //             </div>
        //             <div class="card-footer">Created by Mostafa Z.</div>
        //         </div>
        //     </div>    
        // `;
        tasksDiv.classList.remove('d-none');

    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
});