
const person = {
    firstName: "Alex",
    lastName: "Benks",
    age: 22
};

person.email = "alex.benks@example.com";
delete person.age;

console.log(person);