const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function logger(iOperation, prevResult, iNumber, iResult) {
    const logEntry = {
        operation: iOperation,
        prevResult: prevResult,
        number: iNumber,
        result: iResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculationResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD'       &&
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLY'  &&
        calculationType !== 'DIVIDE'    ||
        !enteredNumber
    ) {
        return;
    }
    
    /*if (
        calculationType === 'ADD'       ||
        calculationType === 'SUBSTRACT' ||
        calculationType === 'MULTIPLY'  ||
        calculationType === 'DIVIDE'
    ) {*/
    
    const initialREsult = currentResult;
    let mathOperation;
        
    if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperation = '+';
    } else if (calculationType === 'SUBSTRACT') {
            currentResult -= enteredNumber;
            mathOperation = '-';
    } else if(calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperation = '*';
    } else if(calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperation = '/';
    }
        
    createAndWriteOutput(mathOperation, initialREsult, enteredNumber);
    logger(calculationType, initialREsult, enteredNumber, currentResult);   
    //}
}

function add() {
    calculationResult('ADD');
}

function subtract() {
    calculationResult('SUBSTRACT');
}

function multiply() {
    calculationResult('MULTIPLY');
}

function divide() {
    calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);