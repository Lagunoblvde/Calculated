function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Ошибка: нельзя делить на ноль!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Ошибка: неверный оператор!";
    }

    document.getElementById('result').textContent = "Результат: " + result;
}
