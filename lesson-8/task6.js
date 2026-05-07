
const numbersList = [1,10,14,2,2,4,5,43,34];

const copiAndSortedNumbersList = function () {
    const copiedNumbersList = numbersList.slice();
    copiedNumbersList.sort((a, b) => a - b);
    return copiedNumbersList;
}

console.log(numbersList);
console.log(copiAndSortedNumbersList());