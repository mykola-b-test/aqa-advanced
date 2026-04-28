let number = Math.floor(Math.random() * 10) + 1; // random number from 1 to 10

{
    console.log(`Multiplication table for "${number}" via FOR Loop:`);
    let result;
        for (let i = 1; i <= 10; i++) {
        result = number * i;
        console.log(number + " x " + i + " = " + result);
        };
};

{
    console.log(`Multiplication table for "${number}" via WHILE Loop:`);
    let result;
    let i = 1; 
        while (i <= 10) {
        result = number * i;
        console.log(`${number} x ${i} = ${result}`);
        i++;
        };
};
