
function testFunction(num) {
    console.log(num);
    if (num <= 0) {
        return num;
    } else {
        return testFunction(num - 1);
    }
};

testFunction(10);