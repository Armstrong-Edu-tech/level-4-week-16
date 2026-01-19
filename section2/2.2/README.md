## Topic 2.2 – Basic Jest Tests for Math Functions

This folder is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, Section 2 (Writing Unit Tests with Jest). It introduces the **basic Jest test structure** using a simple math function.

### What it does

- Defines a `sum(a, b)` function in `math.js` that returns the sum of two numbers.
- Provides Jest tests in `math.test.js` that:
  - Import `sum`
  - Call it with different arguments
  - Assert the result using `expect(sum(2, 3)).toBe(5)` and similar checks

This matches the lesson topics on:
- Using `describe`, `it`/`test`
- Using `expect` with matchers like `toBe`
- Writing clear, readable unit tests for simple pure functions

### Install & Run

From this folder:

```bash
npm install
npm test
```