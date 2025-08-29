console.clear();

const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "fooMA",
      body: "barMA",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "fooMA",
      body: "barMA",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const updateSingleData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "patch",
    data: JSON.stringify({
      title: "I changed the title",
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

updateSingleData();
