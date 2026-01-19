## Starter Project – Product API (Week 16 Practice)

This `starter-project` is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, under Topic 3.4. It provides a complete **Express product API** without tests so you can practice setting up Jest, writing tests, and generating coverage.

### What it does

- `app.js`:
  - Creates an Express app.
  - Mounts product routes under `/products`.
- `config/db.js` – Database connection configuration.
- `models/product.model.js` – Mongoose product schema/model.
- `controllers/product.controller.js` – Business logic for handling product operations.
- `routes/product.routes.js` – Express route definitions for product endpoints.

Your task (as per the Week 16 project idea):
- Install and configure **Jest**.
- Write unit and integration tests for:
  - Controllers
  - Routes
  - Any core business logic.
- Optionally mock the database layer to isolate logic.
- Add coverage reporting and aim for solid test coverage.

### Suggested Setup & Commands

From this folder:

```bash
npm install
# configure Jest in package.json or jest.config.js
npm test
```