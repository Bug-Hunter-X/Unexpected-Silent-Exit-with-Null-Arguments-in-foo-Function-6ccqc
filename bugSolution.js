function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed as arguments.');
  }
  // ... rest of the function
}