# Unexpected Silent Exit with Null Arguments in foo Function

This repository demonstrates a subtle bug in JavaScript where a function silently exits when null values are passed as arguments. The function `foo` does not handle null values appropriately, leading to unexpected behavior. The bug is demonstrated in `bug.js` and a solution is provided in `bugSolution.js`.

## Bug Description
The `foo` function in `bug.js` contains a conditional check for null values. If either `a` or `b` is null, the function simply returns without any error handling or alternative behavior. This can be problematic because it may not always be apparent that the function has terminated early and produced no output.

## Solution
The `bugSolution.js` file demonstrates a solution where explicit error handling is added.  The function checks for null arguments and throws an error if either argument is null. This ensures that the unexpected behavior is caught and reported, which helps prevent more significant issues.