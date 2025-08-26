// Clear the browser console before running (so only fresh logs appear)
console.clear();

// Function to fetch data from an API using XMLHttpRequest
const getData = () => {
    // 1. Create a new XMLHttpRequest object (used to communicate with the server)
    const xhr = new XMLHttpRequest();
    
    // 2. Configure the request:
    //    - Method: GET
    //    - URL: Free public API that returns fake posts in JSON format
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts");

    // 3. Event handler for successful response
    xhr.onload = () => {
        // xhr.response contains the response data (as text by default)
        // Parse the JSON string into a JavaScript object/array
        let data = xhr.response;
        console.log(JSON.parse(data)); // Log parsed data to the console
    }

    // 4. Event handler for network errors (e.g., no internet connection)
    xhr.onerror = () => {
        console.log("Error occurred while making the request");
    }

    // 5. Send the request to the server
    xhr.send();
}

// Call the function to start the API request
getData();
