const request = "https://api.github.com/users/subrata-24";

const xhr = new XMLHttpRequest();

xhr.open("GET", request);

xhr.onreadystatechange = function () {
    // console.log(xhr.readyState, xhr.status);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        // console.log(data.followers);

        // retrive the image and use it as a backgrounf image
        const img = document.createElement('img');
        img.src = data.avatar_url;
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.dispaly = "block";
        img.style.margin = "0";

        document.body.style.margin = "0";
        document.body.style.padding = "0";

        document.body.appendChild(img);
    }
}

xhr.send();

