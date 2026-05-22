
class TodoService {
    constructor(url) {
        this.url = url;
    }

    todoFetch() {
        return fetch(this.url)
        .then(response => response.json())
    }
};

class UserService {
    constructor(url) {
        this.url = url;
    }

    userFetch() {
        return fetch(this.url)
        .then(response => response.json())
    }
};


const todo1 = new TodoService('https://jsonplaceholder.typicode.com/todos/1');
const user1 = new UserService('https://jsonplaceholder.typicode.com/users/1');


Promise.all([todo1.todoFetch(), user1.userFetch()])
    .then(([todo, user]) => {
        let todoResult = todo
        let userResult = user
        console.log("Todo:", todoResult);
        console.log("User:", userResult);
    })
    .catch(error => console.error('Error in one of the fetches:', error));

Promise.race([todo1.todoFetch(), user1.userFetch()])
    .then(raceResult => {
        let result = raceResult;
        console.log("First successful fetch:", result);
    })
    .catch(error => console.error('Error in one of the fetches:', error));