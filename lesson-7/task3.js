function divide (numerator, denominator) {
    if ((denominator === 0) || (typeof numerator !== "number" || typeof denominator !== "number")){
        throw new Error("ErrorMessage: denominator should not be equal to 0 and numerator and denominator should be numbers");
    } return numerator / denominator;
};

try {
    console.log(divide(20,5)); // 4
    } catch (error) {
    console.log(error.message);
    } finally {
        console.log("Робота завершена");
    };

try {
    console.log(divide(20,0)); // ErrorMessage
    } catch (error) {
    console.log(error.message);
    } finally {
        console.log("Робота завершена");
    };

try {
    console.log(divide(0,20)); // 0
    } catch (error) {
    console.log(error.message);
    } finally {
        console.log("Робота завершена");
    };

try {
    console.log(divide("20",5)); // ErrorMessage
    } catch (error) {
    console.log(error.message);
    } finally {
        console.log("Робота завершена");
    };

try {
    console.log(divide(20,"5")); // ErrorMessage
    } catch (error) {
    console.log(error.message);
    } finally {
        console.log("Робота завершена");
    };