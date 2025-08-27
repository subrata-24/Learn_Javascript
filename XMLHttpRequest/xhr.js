console.clear();


const makeRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {   
        let data = xhr.response;
        console.log(JSON.parse(data)); 
    }

    xhr.onerror = () => {
        console.log("Error occurred while making the request");
    }

    xhr.send();
}
const getData = () => {
    makeRequest('GET', "https://jsonplaceholder.typicode.com/posts") 
}


getData();
