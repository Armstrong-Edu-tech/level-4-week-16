## Topic 2.4 – Combining Sync and Async Tests in One Module

This folder belongs to **Armstrong Level 4 – Week 16: Unit Testing with Jest**, and it combines **synchronous** and **asynchronous** tests in a single small module.

### What it does

- `app.js` exports:
  - `add(a, b)` – a simple synchronous function that adds two numbers.
  - `fetchData()` – returns a Promise that resolves to `"Data Received"` after a short delay.
- `app.test.js` (this file may be named slightly differently depending on setup) includes:
  - Unit tests for `add` using `expect(add(2, 3)).toBe(5)`-style assertions.
  - Async tests for `fetchData` using `async/await` and Jest’s async utilities.

This reinforces:
- Basic Jest syntax (`describe`, `test`/`it`, `expect`)
- How to mix sync and async tests in the same suite

### Install & Run

From this folder:

```bash
npm install
npm test
```