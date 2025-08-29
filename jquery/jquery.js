console.clear();

const makeRequest = async (url, method) => {
  try {
    const res = await $.ajax({
      url: url,
      method: method,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "GET").then((res) =>
    console.log(res)
  );
};

getData();
