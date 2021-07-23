const api = "https://jsonplaceholder.typicode.com/users";

const Robots = new Promise((resolve, reject) => {
  fetch(api)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
})
  .then((resolvedPromise) => resolvedPromise)
  .catch(console.warn);

export default Robots;
