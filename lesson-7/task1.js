
const handleEven = (n) => {
    console.log(`number ${n} is even`);
};

const handleOdd = (n) => {
    console.log(`number ${n} is odd`);
};

const handleNum = (n, evenCallback, oddCallback) => {
    if (n % 2 === 0) { 
        evenCallback(n); 
    } else { 
        oddCallback(n); 
    };
};

handleNum(4, handleEven, handleOdd); // number is even
handleNum(5, handleEven, handleOdd); // number is odd
