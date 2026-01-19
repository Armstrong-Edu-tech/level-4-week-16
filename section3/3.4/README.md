## Topic 3.4 – Product API Testing, Coverage & Starter Project

This folder is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, focusing on **Express.js product API testing**, **mocking**, and **coverage**. It also includes a **starter project** so students can practice writing tests from scratch.

### What it does

- `app.js`:
  - Loads environment variables.
  - Creates an Express app and enables JSON parsing.
  - Mounts product routes under `/products`.
  - Exports `{ app }` for Jest + Supertest tests.
- `config/db.js`, `models/product.model.js`, `controllers/product.controller.js`, `routes/product.routes.js`:
  - Define the product schema, business logic, and HTTP routes.
- `tests/product.test.js`:
  - Uses Jest + Supertest to test product CRUD operations.
  - Typically mocks Mongoose operations to keep tests fast and isolated.
- `coverage/`:
  - Jest coverage output (HTML reports and summary files).
- `starter-project/`:
  - A copy of the product API (without tests) for practice.

This aligns with the Week 16 topics:
- Testing Express.js applications
- Mocking models and external dependencies
- Understanding and using Jest coverage reports

### Install & Run

From this folder:

```bash
npm install
npm test
```

To inspect coverage, open:

- `coverage/lcov-report/index.html`

in your browser.


## Starter Project – Product API (Practice)

The `starter-project` subfolder mirrors the same product API structure but **does not include tests**, so you can:

- Set up Jest in `package.json`
- Write your own unit and integration tests for:
  - Controllers
  - Routes
  - Any database/business logic
- Add coverage scripts and compare with the main `3.4` implementation.