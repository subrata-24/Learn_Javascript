console.clear();

// fetch does not reject on HTTP errors like 404 or 500.
// It only rejects on network errors.

const makeRequest = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest().then((res) => console.log(res));
};

getData();
