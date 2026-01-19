## Armstrong Level 4 – Week 16: Unit Testing with Jest

This repository contains multiple small Node.js/Express topics organized into sections (`section2`, `section3`) plus a larger `weekly-project`. All examples are focused on **unit testing with Jest**, including basic unit tests, asynchronous testing, mocking, Express.js testing, and test coverage.

- **Prerequisites**: Node.js (v18+ recommended) and npm installed.
- **Install dependencies**: Run `npm install` inside each topic folder before running tests the first time.
- **Run tests**: From that topic folder, use `npm test`.

### Folders

- **section2**: Core Jest fundamentals for simple functions and asynchronous logic  
  - **2.2** – Basic unit tests for math utilities (synchronous functions like `sum`)
  - **2.3** – Testing asynchronous code with callbacks and Promises
  - **2.4** – Combining sync and async testing patterns in a small module

- **section3**: Testing Express.js applications and working with test coverage  
  - **3.1** – Testing business logic that uses Mongoose models (mocking `User.findById`)
  - **3.2** – Testing basic Express routes with Jest and Supertest (no DB connection)
  - **3.3** – Express user API with Jest tests and coverage reports
  - **3.4** – Express product API with Jest tests, coverage, and a starter project to practice on

- **weekly-project**: Full E‑Commerce API (auth, cart, orders, Stripe service) with Jest tests, Supertest-based HTTP testing, and coverage reports.


## Weekly Project – Unit Testing E‑Commerce API with Jest

The `weekly-project` folder contains the main **Week 16 project**, an Express-based e‑commerce API focused on unit and integration testing with Jest.

### What it does:
- Provides authentication (login) with JWT-based protection
- Manages a shopping cart with CRUD operations
- Handles order creation and payment processing via a Stripe service layer
- Demonstrates how to **mock models and external services** in Jest tests
- Generates Jest **coverage reports** for controllers, middleware, routes, and services

### Structure

- `app.js` – Express app entry point and route mounting
- `config/` – Database configuration
- `controllers/` – Request handlers for auth, cart, and orders
- `middleware/` – Authentication middleware (JWT verification)
- `models/` – Mongoose models for users, cart items, and orders
- `routes/` – Express route definitions (`/auth`, `/cart`, `/orders`)
- `services/` – Stripe payment integration service
- `tests/` – Jest test suites for auth, cart, and order flows
- `coverage/` – Automatically generated Jest coverage reports (HTML, lcov, etc.)
- `starter-project/` – Same API structure without tests so students can write them from scratch

### Getting Started (Weekly Project)

- **Install dependencies**:
  ```bash
  cd weekly-project
  npm install
  ```
- **Environment variables**:  
  Create a `.env` file in `weekly-project` with at least:
  ```env
  PORT=5000
  JWT_SECRET=your_jwt_secret_here
  MONGODB_URI=mongodb://localhost:27017/armstrong-week16
  STRIPE_SECRET_KEY=sk_test_your_key_here
  ```
- **Run tests**:
  ```bash
  npm test
  ```
- **Run the server (optional)**:
  ```bash
  node app.js
  ```

This week’s content builds on the Week 15 real-time/e‑commerce concepts by adding **robust Jest test suites** for critical routes and flows (cart operations, order creation, payment processing, and authenticated login).