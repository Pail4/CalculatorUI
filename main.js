function calc(operation, a, b) {
    switch (operation) {
        case 'sum':
            return a + b;
        case 'sub':
            return a - b;
        case 'mult':
            return a * b;
        case 'div':
            return a / b;
        default:
            return a;
    }
}
let firstNumber = 0;
let currentNumber = 0;
let operation = 'sum';

let deleteBtn = document.querySelector(".delete");
let clear = document.querySelector(".clear");
let line = document.querySelector(".line");
let numbers = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation")

function numberClick() {
    if (currentNumber === null){
        currentNumber = 0;
    }
    if (currentNumber < 10000) {
        currentNumber += this.textContent;
        update();
    }
}

function operatorClick() {
    if (currentNumber != null){
        getResult(operation, firstNumber, currentNumber);
        operation = this.id;
        firstNumber = currentNumber;
        currentNumber = null;
    }
    else {
        operation = this.id;
    }
}

function getResult() {
    currentNumber = calc(operation, firstNumber, currentNumber);
    update();
    if (isNaN(currentNumber)){
        setTimeout(() => {
            clearLine();
        }, 1000);
    }
}

function clearLine() {
    firstNumber = 0;
    currentNumber = 0;
    operation = "sum";
    update();
}

function undo() {
    currentNumber = Math.trunc(currentNumber / 10);
    update();
}

function update() {
    currentNumber = Number(currentNumber);
    if (line.style.overflow != "auto" && currentNumber >= 100000) {
        line.style.overflow = "auto";
        line.style.fontSize = "74px";
    }
    else if (line.style.overflow === "auto"){
        line.style.overflow = "inherit";
        line.style.fontSize = "96px";
    }
    line.textContent = currentNumber;
}

window.onload = function () {
    for (let digit of numbers) {
        digit.onclick = numberClick;
    }
    for (let op of operations) {
        op.onclick = operatorClick;
    }
    clear.onclick = clearLine;
    deleteBtn.onclick = undo;
}