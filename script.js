let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let resetScreenFlag = false

lastDisplay = document.getElementById("lastDisplay");
currentDisplay = document.getElementById("currentDisplay");

let clearButton = document.getElementById('clearButton')
let deleteButton = document.getElementById('deleteButton')


let zeroButton = document.getElementById('zeroButton')
let oneButton = document.getElementById('oneButton')
let twoButton = document.getElementById('twoButton')
let threeButton = document.getElementById('threeButton')
let fourButton = document.getElementById('fourButton')
let fiveButton = document.getElementById('fiveButton')
let sixButton = document.getElementById('sixButton')
let sevenButton = document.getElementById('sevenButton')
let eightButton = document.getElementById('eightButton')
let nineButton = document.getElementById('nineButton')


// let buttons = document.querySelectorAll("button");


clearButton.addEventListener('click', reset);
deleteButton.addEventListener('click', deleteB);


// I have to make it anonymous function calling numberAppend() because
// addEventListener only takes a function as its second argument
// so without it, it would only call the numberAppend function once and never again
zeroButton.addEventListener('click', () => numberAppend(zeroButton.textContent)) 
oneButton.addEventListener('click', () => numberAppend(oneButton.textContent))
twoButton.addEventListener('click', () => numberAppend(twoButton.textContent))
threeButton.addEventListener('click', () => numberAppend(threeButton.textContent))
fourButton.addEventListener('click', () => numberAppend(fourButton.textContent))
fiveButton.addEventListener('click', () => numberAppend(fiveButton.textContent))
sixButton.addEventListener('click', () => numberAppend(sixButton.textContent))
sevenButton.addEventListener('click', () => numberAppend(sevenButton.textContent))
eightButton.addEventListener('click', () => numberAppend(eightButton.textContent))
nineButton.addEventListener('click', () => numberAppend(nineButton.textContent))

// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//     })
// })

function reset()
{
    lastDisplay.textContent = ''
    currentDisplay.textContent = '0'
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}


function deleteB()
{
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1)
    if (currentDisplay.textContent == "")
    {
        currentDisplay.textContent = 0
    }
}



function numberAppend(number)
{
    // console.log(number)
    if (currentDisplay.textContent == '0' || resetScreenFlag)
    {
        currentDisplay.textContent = ''
        resetScreenFlag = false;
    }
    currentDisplay.textContent += number
}
