// Simple Jenkins Test Script
console.log("=== Jenkins Job Started ===");
console.log("Current Date: " + new Date());
console.log("Node Version: " + process.version);

// Simple test function
function testAddition(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
  return result;
}

// Run tests
console.log("\n=== Running Tests ===");
testAddition(5, 3);
testAddition(10, 20);

// Simple status check
const status = "SUCCESS";
console.log("\n=== Job Status ===");
console.log("Status: " + status);
console.log("=== Jenkins Job Completed ===");
