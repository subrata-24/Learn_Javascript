console.clear();

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "fooDA",
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
