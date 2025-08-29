console.clear();

const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

getData();
