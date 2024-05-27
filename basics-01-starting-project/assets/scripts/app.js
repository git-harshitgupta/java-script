const defaultResult = 0;
let currentResult = defaultResult;

function createAndWriteOutput(operator,resultBeforeCal,calcNumber){
    const calcDesc = `${resultBeforeCal} ${operator} ${calcNumber}`
    outputResult(currentResult,calcDesc);
}

function add(){
    // currentResult = currentResult + parseInt(userInput.value);
    const enteredNumber = parseInt(userInput.value)
    const initalValue = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initalValue,enteredNumber);
}

function subtract(){
    const enteredNumber = parseInt(userInput.value)
    const initalValue = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initalValue,enteredNumber);
}

function multiply(){
    const enteredNumber = parseInt(userInput.value)
    const initalValue = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initalValue,enteredNumber);
}

function divide(){
    const enteredNumber = parseInt(userInput.value)
    const initalValue = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initalValue,enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

