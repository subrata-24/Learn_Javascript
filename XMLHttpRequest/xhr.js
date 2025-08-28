console.clear();


const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    //Tell server that we send JSON data
    xhr.setRequestHeader( 'Content-type', 'application/json')

    xhr.onload = () => {   
        let data = xhr.response;
        console.log(JSON.parse(data)); 
    }

    xhr.onerror = () => {
        console.log("Error occurred while making the request");
    }

    //make the data in JSON formate before sending
    xhr.send(JSON.stringify(data));
}
const getData = () => {
    makeRequest('GET', "https://jsonplaceholder.typicode.com/posts") 
}

const sendData = () => {
    makeRequest('POST', "https://jsonplaceholder.typicode.com/posts",{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}

const updateData = () => {
    // We specify the resource to update by adding its ID in the URL (/1).
    // PUT request replaces the entire data of that resource with new data.
    makeRequest('PUT', "https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    })
}

const updateSingleData = () => {
    // We specify the resource to update by adding its ID in the URL (/1).
    // PATCH request only replace or update the specified data with new data.
    makeRequest('PATCH', "https://jsonplaceholder.typicode.com/posts/1", {
        //Here you must specified what you want to update and the updated value
        title: 'Only this value is changed by PATCH',
    })
}

updateSingleData();
