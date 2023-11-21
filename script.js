
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let decimalFlag = null;

lastDisplay = document.getElementById("lastDisplay");
currentDisplay = document.getElementById("currentDisplay");

let clearButton = document.getElementById('clearButton');
let deleteButton = document.getElementById('deleteButton');


let zeroButton = document.getElementById('zeroButton');
let oneButton = document.getElementById('oneButton');
let twoButton = document.getElementById('twoButton');
let threeButton = document.getElementById('threeButton');
let fourButton = document.getElementById('fourButton');
let fiveButton = document.getElementById('fiveButton');
let sixButton = document.getElementById('sixButton');
let sevenButton = document.getElementById('sevenButton');
let eightButton = document.getElementById('eightButton');
let nineButton = document.getElementById('nineButton');

let divideButton = document.getElementById('divideButton');
let multiplyButton = document.getElementById('multiplyButton');
let subtractButton = document.getElementById('subtractButton');
let addButton = document.getElementById('addButton');

let pointButton = document.getElementById('pointButton');
let equalButton = document.getElementById('equalButton');
// let buttons = document.querySelectorAll("button");


clearButton.addEventListener('click', reset);
deleteButton.addEventListener('click', deleteB);


// I have to make it anonymous function calling numberAppend() because
// addEventListener only takes a function as its second argument
// so without it, it would only call the numberAppend function once and never again
zeroButton.addEventListener('click', () => numberAppend(zeroButton.textContent)) ;
oneButton.addEventListener('click', () => numberAppend(oneButton.textContent));
twoButton.addEventListener('click', () => numberAppend(twoButton.textContent));
threeButton.addEventListener('click', () => numberAppend(threeButton.textContent));
fourButton.addEventListener('click', () => numberAppend(fourButton.textContent));
fiveButton.addEventListener('click', () => numberAppend(fiveButton.textContent));
sixButton.addEventListener('click', () => numberAppend(sixButton.textContent));
sevenButton.addEventListener('click', () => numberAppend(sevenButton.textContent));
eightButton.addEventListener('click', () => numberAppend(eightButton.textContent));
nineButton.addEventListener('click', () => numberAppend(nineButton.textContent));


divideButton.addEventListener('click', () => operationAppend(divideButton.textContent));
multiplyButton.addEventListener('click', () => operationAppend(multiplyButton.textContent));
subtractButton.addEventListener('click', () => operationAppend(subtractButton.textContent));
addButton.addEventListener('click', () => operationAppend(addButton.textContent));
pointButton.addEventListener('click', () => operationAppend(pointButton.textContent));

equalButton.addEventListener('click', evaluate)



function reset()
{
    lastDisplay.textContent = '';
    currentDisplay.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}


function deleteB()
{
    

    let lastChar = currentDisplay.textContent.toString().slice(-1);
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1)
    if (currentDisplay.textContent == "")
    {
        currentDisplay.textContent = 0;
    }

    // if last character is a decimal, then we can use a decimal
    if (lastChar == ".")
    {
        currentOperation = null;
        decimalFlag = null;
    }
    // if last character is an operation, then we need to check if there is a decimal or not
    // to determine whether decimalFlag is true or not
    else if (lastChar == "/" || lastChar == "*" || lastChar == "-" || lastChar == "+")
    {
        currentOperation = null;

        let current = currentDisplay.textContent.toString()
        lastOperation = null;
        for (let i = 0; i < current.length; i++)
        {
            if (current.charAt(i) >= '0' && current.charAt(i) <= '9')
            {

            }
            else
            {
                lastOperation = current.charAt(i);
            }
        }

        if (lastOperation == ".")
        {
            decimalFlag = true;
        }
        else
        {
            decimalFlag = null;
        }
    }
    else // last character is a number, check last character again to see if it is an operation
    {
        let lastChar = currentDisplay.textContent.toString().slice(-1);
        if (lastChar == "." || lastChar == "/" || lastChar == "*" || lastChar == "-" || lastChar == "+")
        {
            currentOperation = lastChar;
        }
    }
    
}



function numberAppend(number)
{
    // console.log(number)
    if (currentDisplay.textContent == '0')
    {
        currentDisplay.textContent = '';
    }
    currentDisplay.textContent += number;
    currentOperation = null;
    
}



function operationAppend(operation)
{
    if (currentOperation != null) 
    {
        return;
    }
    else if (decimalFlag != null && operation == ".")
    {
        return;
    }
    
    firstOperand = currentDisplay.textContent; 
    currentOperation = operation;
    currentDisplay.textContent = `${firstOperand}${currentOperation}`;
    decimalFlag = null;
    if (operation == ".")
    {
        decimalFlag = true;
    }
}



function evaluate()
{
    if (currentOperation != null)
    {
        return;
    }
    let res = math.evaluate(currentDisplay.textContent);
    if (res == "Infinity")
    {
        alert("divide by 0 error")
        return;
    }
    lastDisplay.textContent = currentDisplay.textContent;
    currentDisplay.textContent = res;
    currentOperation = null;
    decimalFlag = null;
}