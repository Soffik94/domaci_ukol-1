// Creating a constant variable in the decimal system
const decimalNumber = 0;
// Function to convert decimal to binary
function decimalToBinary(decimalNumber) {
    // Creating variable for return value of the function
    let binary = '';
    // Converting decimalNumber to binary if decimalNumber equals 0
    if (decimalNumber === 0) {
        return '0';
    }
    // Converting decimalNumber to binary if decimalNumber < 0
    else if (decimalNumber < 0){
            decimalNumber = decimalNumber*(-1);
            while (decimalNumber > 0) {
                binary = (decimalNumber % 2) + binary;
                decimalNumber = Math.floor(decimalNumber / 2);
            }
            return -binary;
    }
    // Converting decimalNumber to binary if decimalNumber > 0
    else {
        while (decimalNumber > 0) {
            binary = (decimalNumber % 2) + binary;
            decimalNumber = Math.floor(decimalNumber / 2);
            }
        return binary;
        }
    }
// Console output
console.log(`Decimal ${decimalNumber} to Binary= ${decimalToBinary(decimalNumber)}`);
