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

sendData();
