
async function todoFetch() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return response.json();
}

async function userFetch() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return response.json();
}

const collection = [todoFetch(), userFetch()];

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