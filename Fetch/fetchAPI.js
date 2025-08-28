console.clear()

// fetch does not reject on HTTP errors like 404 or 500.
// It only rejects on network errors.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
