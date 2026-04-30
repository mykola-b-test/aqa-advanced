
function checkOrder(available, ordered) {
    if (ordered < 0) {
        return "Invalid input";
    }
    if (ordered === 0) {
        return "Your order is empty";
    }
    if (available >= ordered) {
        return "Your order is accepted";
    }
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    }
}

console.log(checkOrder(0, -1)); // "Invalid input"
console.log(checkOrder(0, 0)); // "Your order is empty"
console.log(checkOrder(1, 0)); // "Your order is empty" 
console.log(checkOrder(0, 1)); // "Your order is too large, we don’t have enough goods." 
console.log(checkOrder(1, 2)); // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(1, 1)); // "Your order is accepted"
console.log(checkOrder(2, 1)); // "Your order is accepted"
