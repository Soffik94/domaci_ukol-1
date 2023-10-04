// Creating a constant variable in the decimal system
const decimalInput = -42;
// Function to convert decimal to binary
function decimalToBinary(decimalNumber) {
    // Creating variable for return value of the function
    let binary = '';
    // Converting decimalInput to binary if decimalInput equals 0
    if (decimalNumber === 0) {
        return '0';
    }
    // Converting decimalInput to binary if decimalInput < 0
    if (decimalNumber < 0){
            decimalNumber = decimalNumber*(-1);
            while (decimalNumber > 0) {
                binary = (decimalNumber % 2) + binary;
                decimalNumber = Math.floor(decimalNumber / 2);
            }
            return -binary;
    }
    // Converting decimalInput to binary if decimalInput > 0
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
        return binary;
}
// Console output
console.log(`Decimal ${decimalInput} to Binary= ${decimalToBinary(decimalInput)}`);
