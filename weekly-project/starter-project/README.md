## Starter Project – E‑Commerce API (Week 16 Practice)

This `starter-project` is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, under the Weekly Project. It contains a full **E‑Commerce API** (auth, cart, orders, Stripe service) **without tests**, so you can practice writing Jest tests and adding coverage.

### What it does

- `app.js` – Express app that wires together all routes.
- `config/db.js` – MongoDB connection configuration.
- `controllers/`
  - `auth.controller.js` – Login and authentication logic.
  - `cart.controller.js` – Cart CRUD operations.
  - `order.controller.js` – Order creation logic.
- `middleware/auth.middleware.js` – JWT authentication middleware.
- `models/`
  - `user.model.js` – User schema/model.
  - `cartItem.model.js` – Cart item schema/model.
  - `order.model.js` – Order schema/model.
- `routes/`
  - `auth.routes.js` – `/auth` endpoints.
  - `cart.routes.js` – `/cart` endpoints.
  - `order.routes.js` – `/orders` endpoints.
- `services/stripe.service.js` – Stripe integration layer for payments.

Your tasks (aligned with the Week 16 project brief):
- Set up **Jest** and **Supertest**.
- Write tests for:
  - Cart API (CRUD operations on `/cart`).
  - Order creation and payment processing (`/orders`).
  - Authenticated login and protected routes (`/auth`, middleware).
- Mock:
  - The **Stripe service** for isolated payment tests.
  - Mongoose models where appropriate for fast, deterministic tests.
- Add coverage reporting and ensure good coverage across controllers, middleware, and services.

### Suggested Setup & Commands

From this folder:

```bash
npm install
# configure Jest and Supertest
npm test
```