// app.js - Main application with simple calculations

console.log("\n========================================");
console.log("   NODE.JS CALCULATOR APPLICATION");
console.log("========================================\n");

// Calculator functions
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
    return "Error: Division by zero!";
  }
  return a / b;
}

// Run calculations
console.log("Running Simple Calculations:");
console.log("----------------------------");

const num1 = 15;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);

// Application status
console.log("\n========================================");
console.log("   APPLICATION STATUS: RUNNING OK");
console.log("========================================\n");

// Export for testing
module.exports = { add, subtract, multiply, divide };
