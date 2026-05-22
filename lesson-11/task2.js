
const todoFetch = (id) => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json());

const userFetch = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json());

const collection = [todoFetch(1), userFetch(1)];

Promise.all(collection)
    .then(([todo, user]) => {
        let todoResult = todo
        let userResult = user
        console.log("Todo:", todoResult);
        console.log("User:", userResult);
    })
    .catch(error => console.error('Error in one of the fetches:', error));

Promise.race(collection)
    .then(raceResult => {
        let result = raceResult;
        console.log("First successful fetch:", result);
    })
    .catch(error => console.error('Error in one of the fetches:', error));
