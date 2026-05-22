
const delayedText = (printedText, printDelay) => {
    setTimeout(() => console.log(`${printedText} ${printDelay} seconds`), printDelay * 1000);
}

delayedText("This text is printed with delay in", 2);




