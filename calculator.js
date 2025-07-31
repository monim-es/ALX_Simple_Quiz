function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function getNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return [num1, num2];
}

document.getElementById('add-button').addEventListener('click', function () {
    const [a, b] = getNumbers();
    document.getElementById('calculation-result').textContent = add(a, b);
});

document.getElementById('subtract-button').addEventListener('click', function () {
    const [a, b] = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(a, b);
});

document.getElementById('multiply-button').addEventListener('click', function () {
    const [a, b] = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(a, b);
});

document.getElementById('divide-button').addEventListener('click', function () {
    const [a, b] = getNumbers();
    document.getElementById('calculation-result').textContent = divide(a, b);
});
