//An API endpoint URL
const url = "https://jsonplaceholder.typicode.com/posts";

const factPara = document.getElementById("fact");
const factButton = document.getElementById("factBtn");

// Fetch data from the URL
const fetchData = async () => {
    try {
        const response = await fetch(url);
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Display the response object in the console
        console.log(response);

        // Parse the JSON data
        const data = await response.json();
        // Display the data in the console
        console.log(data);

        // Display the first post title in the paragraph
        factPara.textContent = data[0].title;
        // Display the first post content in the paragraph
        factPara.innerText = data[0].body;
        // Display the first post ID in the paragraph
        factPara.innerHTML += `<br><strong>ID:</strong> ${data[0].id}`;
        // Display the first post user ID in the paragraph
        factPara.innerHTML += `<br><strong>User ID:</strong> ${data[0].userId}`;
        
    } 
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to fetch a random fact from an API
factButton.addEventListener("click", fetchData);
