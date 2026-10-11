window.alert("this is a calculator made like a real life calculator.")

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = " 0 ";
}
