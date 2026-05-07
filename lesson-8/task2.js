
function multiplyElementByIndex(data) {
    return data.map((element, index) => element * index);
}

const data = [1, 2, 3, 4, 5, 6];
console.log(multiplyElementByIndex(data));