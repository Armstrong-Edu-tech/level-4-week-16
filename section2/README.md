## Section 2 – Writing Unit Tests with Jest

This section focuses on **core Jest fundamentals**: configuring Jest in a Node.js project, writing basic unit tests, and testing asynchronous code. Each subtopic folder here is a small, focused example aligned with the Week 16 lesson outline.

- **Prerequisites**: Node.js and npm installed.
- **Install dependencies**: Run `npm install` inside each subfolder before running tests.
- **Run tests**: From each subfolder, use `npm test` (if defined).

### Folders

- **2.2** – Basic math utilities tested with Jest (intro to test structure and assertions)
- **2.3** – Testing asynchronous code using callbacks and Promises
- **2.4** – Combining sync and async tests in one small module


## Topic 2.2 – Basic Jest Tests for Math Functions

This folder (`2.2`) contains a simple **math utility function** and its Jest tests, used to practice basic test syntax, assertions, and how to run Jest.

### What it does:
- Exposes a `sum` function that adds two numbers
- Contains Jest tests that:
  - Import the function
  - Call it with sample inputs
  - Assert the result using `expect(...).toBe(...)`

### Installation
```bash
cd section2/2.2
npm install
```

### Running Tests
```bash
npm test
```


## Topic 2.3 – Testing Asynchronous Functions with Jest

This folder (`2.3`) focuses on **asynchronous testing** using callbacks and Promises, matching the Week 16 content on `done`, `async/await`, `.resolves`, and `.rejects`.

### What it does:
- Provides:
  - `fetchUserCallback(cb)` – simulates async data fetching with a callback
  - `fetchUserPromise()` – returns a Promise that resolves with a user object
  - `fetchError()` – returns a Promise that rejects with an error message
- Jest tests demonstrate:
  - Using `done` for callback-based async
  - Using `async/await` and `expect(...).resolves` / `expect(...).rejects` for Promises

### Installation
```bash
cd section2/2.3
npm install
```

### Running Tests
```bash
npm test
```


## Topic 2.4 – Combining Sync and Async Tests in One Module

This folder (`2.4`) shows how to test both **synchronous** and **asynchronous** functions in the same Jest test suite.

### What it does:
- Defines:
  - `add(a, b)` – simple synchronous addition
  - `fetchData()` – returns a Promise that resolves with a string after a delay
- Jest tests cover:
  - Basic assertions for `add`
  - Async tests for `fetchData` using `async/await` and Jest’s Promise utilities

### Installation
```bash
cd section2/2.4
npm install
```

### Running Tests
```bash
npm test
```