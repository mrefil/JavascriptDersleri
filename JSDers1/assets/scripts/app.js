const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);

let calculationDescription = `( ${defaultResult} + 10 ) / 2`;

outputResult(currentResult, calculationDescription);