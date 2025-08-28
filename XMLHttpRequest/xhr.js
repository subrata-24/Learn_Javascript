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
    // We specify the resource to update by its ID in the URL (/1).
    // PATCH updates only the fields you provide, without replacing the whole resource.
    makeRequest('PATCH', "https://jsonplaceholder.typicode.com/posts/1", {
        // Here we only update the "title" field.
        title: 'Only this value is changed by PATCH',
    })
}

const deleteData = () => {
    //Just tell which id you want to delete
    makeRequest('PATCH', "https://jsonplaceholder.typicode.com/posts/1")
}


deleteData();
