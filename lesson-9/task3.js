
const car1 = {
    brand: "Porsche",
    model: "911",
    year: 2026
};

const car2 = {
    brand: "Alfa Romeo",
    model: "Julia",
    owner: "Alex Benks" // мабуть має бути "year", лишив як є в завданні
};

const car3 = { ...car1, ...car2 };

console.log(car3);