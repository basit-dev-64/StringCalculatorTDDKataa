const { add } = require("./add");
const assert = require('assert');

// Test 1
assert.strictEqual(add(""), 0);
console.log("✅ Test 1 passed");

// Test 2
assert.strictEqual(add("1"), 1);
console.log("✅ Test 2 passed");

// Test 3
assert.strictEqual(add("1,5"), 6);
console.log("✅ Test 3 passed");

// Test 4
assert.strictEqual(add("1,2,3,4"), 10);
console.log("✅ Test 4 passed");

// Test 5
assert.strictEqual(add("1\n2,3"), 6);
console.log("✅ Test 5 passed");

// Test 6
assert.strictEqual(add("//;\n1;2"), 3);
console.log("✅ Test 6 passed");

// Test 7: Negative number throws error
try {
    add("1,-2,3");
    console.error("❌ Test 7 failed: no error thrown");
  } catch (e) {
    assert.strictEqual(e.message, "negative numbers not allowed: -2");
    console.log("✅ Test 7 passed");
  }
  
  // Test 8: Multiple negatives
  try {
    add("1,-2,-5,4");
    console.error("❌ Test 8 failed: no error thrown");
  } catch (e) {
    assert.strictEqual(e.message, "negative numbers not allowed: -2,-5");
    console.log("✅ Test 8 passed");
  }
