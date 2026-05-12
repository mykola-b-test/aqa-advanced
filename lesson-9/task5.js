
const users = [
    { firstName: "alex", lastName: "benks", email: "alex.benks@example.com", age: 22 },
    { firstName: "mary", lastName: "fox", email: "mary.fox@example.com", age: 28 },
    { firstName: "brook", lastName: "vans", email: "brook.vans@example.com", age: 35 }
];

for (const {firstName, lastName, email, age} of users) {
    console.log(`Person: ${firstName}, ${lastName}, ${email}, ${age}`);
}