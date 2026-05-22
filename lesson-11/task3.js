
async function todoFetch(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.json();
}

async function userFetch(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.json();
}

const collection = [todoFetch(1), userFetch(1)];

// Promise.all(collection)
//     .then(([todo, user]) => {
//         let todoResult = todo
//         let userResult = user
//         console.log("Todo:", todoResult);
//         console.log("User:", userResult);
//     })
//     .catch(error => console.error('Error in one of the fetches:', error));

// Promise.race(collection)
//     .then(raceResult => {
//         let result = raceResult;
//         console.log("First successful fetch:", result);
//     })
//     .catch(error => console.error('Error in one of the fetches:', error));

// New implementation using async/await
async function promiseAll(collection) {
    try {
        const results = await Promise.all(collection);
        const [todo, user] = results;
        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error('Error in one of the fetches:', error);
    }
}

async function promiseRace(collection) {
    try {
        const result = await Promise.race(collection);
        console.log("First successful fetch:", result);
    } catch (error) {
        console.error('Error in one of the fetches:', error);
    }
}
    
promiseAll(collection);
promiseRace(collection);