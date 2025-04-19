let num1 = prompt("Welcome to Simple Calculator \n \n Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");
if (operator === "+") {
    alert(`The result is: ${num1 + num2}`);
}
else if (operator === "-") {
    alert(`The result is: ${num1 - num2}`);
} else if (operator === "*") {
    alert(`The result is: ${num1 * num2}`);
} else if (operator === "/") {
    alert(`The result is: ${num1 / num2}`);
} else {
    alert("Invalid operator OR Number! Please try again.");
}