## Topic 2.3 – Testing Asynchronous Code with Jest

This folder is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, focusing on **testing asynchronous functions** using callbacks and Promises.

### What it does

- `fetchData.js` exports:
  - `fetchUserCallback(cb)` – simulates an async operation and calls `cb` with a user object.
  - `fetchUserPromise()` – returns a Promise that resolves to a user object.
  - `fetchError()` – returns a Promise that rejects with an error message.
- `fetchData.test.js` demonstrates:
  - Testing callback-based async functions with the `done` callback.
  - Testing Promises with `async/await`.
  - Using Jest matchers such as `resolves` / `rejects` to assert async outcomes.

This corresponds to the Week 16 content on:
- `done` callbacks
- `async/await` in tests
- Handling success and error cases in async workflows

### Install & Run

From this folder:

```bash
npm install
npm test
```