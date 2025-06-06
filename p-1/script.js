document.getElementById("myForm").addEventListener("submit",async (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const job = document.querySelector('input[name="job"]:checked')?.value || "Not Selected";

    formData = {
      firstName: fname,
      lastName: lname,
      email: email,
      job: job,  
    };

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = 
        `
        <strong>Data Has Been Sent Successfully!>
        <pre>${JSON.stringify(result, null, 2)}</pre>
        `;
        outputDiv.classList.remove("d-none")
    } catch (error) {
        console.error("Error Posting Form Data: ", error);
        alert("There was an error submitting your data!")
    }
});