## Section 3 – Testing Express.js Applications & Coverage with Jest

This section focuses on **testing Express.js applications** with Jest (and Supertest), mocking Mongoose models, and working with **test coverage reports**. Each subfolder is a progressively more complete example aligned with the Week 16 advanced testing topics.

- **Prerequisites**: Node.js, npm, and a running MongoDB instance (for full integration tests, if you enable `connectDB()`).
- **Install dependencies**: Run `npm install` inside each subfolder.
- **Run tests**: From each subfolder, use `npm test` (if defined).

### Folders

- **3.1** – Testing business logic that depends on a Mongoose model
- **3.2** – Basic Express user routes tested with Jest + Supertest
- **3.3** – User API with Jest tests and Jest coverage reports
- **3.4** – Product API with Jest tests, coverage, and a starter project to practice on


## Topic 3.1 – Testing Business Logic with Mongoose Models

This folder (`3.1`) demonstrates how to **test pure logic functions** that interact with a Mongoose model, typically using Jest mocks.

### What it does:
- Defines `getUserNameLogic(id)` which:
  - Calls `User.findById(id)`
  - Throws an error if no user is found
  - Returns the user’s `name` when found
- Tests (in `tests/userLogic.test.js`) verify:
  - Successful name retrieval
  - Proper error handling when the user is missing

### Installation
```bash
cd section3/3.1
npm install
```

### Running Tests
```bash
npm test
```


## Topic 3.2 – Testing Express Routes with Jest & Supertest

This folder (`3.2`) contains a small **Express app** exposing user routes and a Jest test suite that uses **Supertest** to simulate HTTP requests.

### What it does:
- `app.js`:
  - Sets up Express
  - Mounts `/users` routes
  - Exports `app` for testing
- Tests (in `tests/user.test.js`) typically:
  - Call endpoints like `GET /users/...`
  - Assert on HTTP status codes and JSON responses
  - Use Jest mocks for database access where needed

### Installation
```bash
cd section3/3.2
npm install
```

### Running Tests
```bash
npm test
```


## Topic 3.3 – User API Testing with Jest Coverage

This folder (`3.3`) extends the previous example with **coverage reporting**.

### What it does:
- `app.js`:
  - Configures an Express user API mounted at `/users`
  - Exports `app` for testing
- `tests/user.test.js`:
  - Contains Jest + Supertest tests for the user routes
- `coverage/`:
  - Auto-generated Jest coverage output (HTML reports, `lcov.info`, etc.)
  - Shows which lines, branches, and functions are covered by your tests

### Installation
```bash
cd section3/3.3
npm install
```

### Running Tests & Coverage
```bash
npm test
# or if configured
npm test -- --coverage
```

Then open the HTML report in `coverage/lcov-report/index.html` in your browser.


## Topic 3.4 – Product API Testing, Coverage & Starter Project

This folder (`3.4`) contains a **product API** with Jest tests, coverage, and a fully working **starter-project** that mimics the same structure but without tests so students can practice.

### What it does:
- `app.js`:
  - Sets up Express
  - Mounts `/products` routes
- `models/product.model.js`, `controllers/product.controller.js`, `routes/product.routes.js`:
  - Define the product schema, business logic, and HTTP routes
- `tests/product.test.js`:
  - Jest + Supertest tests for product CRUD operations
- `coverage/`:
  - Jest coverage reports for the product API
- `starter-project/`:
  - Same Express product API (controllers, routes, models)
  - Intended as a blank canvas for writing your own Jest tests

### Installation
```bash
cd section3/3.4
npm install
```

### Running Tests & Coverage
```bash
npm test
```

To explore coverage, open `coverage/lcov-report/index.html` in a browser.