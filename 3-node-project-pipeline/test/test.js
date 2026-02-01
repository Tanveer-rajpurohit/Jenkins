// test/test.js - Test cases for the calculator application

const { add, subtract, multiply, divide } = require("../app.js");

console.log("\n========================================");
console.log("   RUNNING TEST SUITE");
console.log("========================================\n");

let testsPassed = 0;
let testsFailed = 0;

// Test helper function
function assert(testName, expected, actual) {
  if (expected === actual) {
    console.log(`✓ PASSED: ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ FAILED: ${testName} (Expected: ${expected}, Got: ${actual})`);
    testsFailed++;
  }
}

// Test Cases
console.log("Testing Addition Function:");
assert("5 + 3 should equal 8", 8, add(5, 3));
assert("10 + 20 should equal 30", 30, add(10, 20));
assert("0 + 5 should equal 5", 5, add(0, 5));

console.log("\nTesting Subtraction Function:");
assert("10 - 3 should equal 7", 7, subtract(10, 3));
assert("20 - 5 should equal 15", 15, subtract(20, 5));
assert("5 - 5 should equal 0", 0, subtract(5, 5));

console.log("\nTesting Multiplication Function:");
assert("4 * 5 should equal 20", 20, multiply(4, 5));
assert("7 * 3 should equal 21", 21, multiply(7, 3));
assert("0 * 10 should equal 0", 0, multiply(0, 10));

console.log("\nTesting Division Function:");
assert("20 / 4 should equal 5", 5, divide(20, 4));
assert("15 / 3 should equal 5", 5, divide(15, 3));
assert("100 / 10 should equal 10", 10, divide(100, 10));

// Test Results Summary
console.log("\n========================================");
console.log("   TEST RESULTS SUMMARY");
console.log("========================================");
console.log(`Total Tests Passed: ${testsPassed}`);
console.log(`Total Tests Failed: ${testsFailed}`);
console.log(`Total Tests: ${testsPassed + testsFailed}`);
console.log("========================================\n");

// Exit with appropriate status
if (testsFailed === 0) {
  console.log("✓ ALL TESTS PASSED!");
  process.exit(0);
} else {
  console.log("✗ SOME TESTS FAILED!");
  process.exit(1);
}
