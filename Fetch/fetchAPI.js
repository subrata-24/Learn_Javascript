console.clear();

// fetch does not reject on HTTP errors like 404 or 500.
// It only rejects on network errors.

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barna",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const updateSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Title was changed",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updateSingleData();
