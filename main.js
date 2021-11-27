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
    }
}

let currentNumber = 0;

function numberClick() {
    currentNumber += this.textContent;
}

function operatorClick() {

}

function getResult() {

}

function clear() {

}

function undo() {

}

window.onload = function() {
    let line = document.querySelector(".line");
    line.textContent = currentNumber;
}