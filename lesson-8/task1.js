
// via for loop
{
    function countNumbers(numbers) {
    let negativeCount = 0;
    let zeroCount = 0;
    let positiveCount = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) negativeCount++;
            if (numbers[i] === 0) zeroCount++;
            if (numbers[i] > 0) positiveCount++;
        }
        console.log(`Кількість позитивних чисел: ${positiveCount}`);
        console.log(`Кількість негативних чисел: ${negativeCount}`);
        console.log(`Кількість нульових чисел: ${zeroCount}`);
    return 
    }

    const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
    countNumbers(numbers);
}

// via forEach
{
    function countNumbers(numbers) {
    let negativeCount = 0;
    let zeroCount = 0;
    let positiveCount = 0;
        numbers.forEach(number => {
            if (number < 0) negativeCount++;
            if (number === 0) zeroCount++;
            if (number > 0) positiveCount++;
        });
        console.log(`Кількість позитивних чисел: ${positiveCount}`);
        console.log(`Кількість негативних чисел: ${negativeCount}`);
        console.log(`Кількість нульових чисел: ${zeroCount}`);
    return 
    }

    const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
    countNumbers(numbers);
}

// via for of
{
    function countNumbers(numbers) {
    let negativeCount = 0;
    let zeroCount = 0;
    let positiveCount = 0;
        for (const number of numbers) {
            if (number < 0) negativeCount++;
            if (number === 0) zeroCount++;
            if (number > 0) positiveCount++;
        }
        console.log(`Кількість позитивних чисел: ${positiveCount}`);
        console.log(`Кількість негативних чисел: ${negativeCount}`);
        console.log(`Кількість нульових чисел: ${zeroCount}`);
    return 
    }

    const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
    countNumbers(numbers);
}