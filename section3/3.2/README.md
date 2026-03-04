## Topic 3.2 – Testing Express.js User Routes with Jest & Supertest

This folder belongs to **Armstrong Level 4 – Week 16: Unit Testing with Jest**, focusing on **testing Express.js applications** using Jest and Supertest.

### What it does

- `app.js`:
  - Loads environment variables.
  - Creates an Express app and enables JSON parsing.
  - Mounts user routes under `/users`.
  - Exports `{ app }` so tests can create HTTP requests without starting a real server process.
- `config/db.js`, `models/user.model.js`, `controllers/user.controller.js`, and `routes/user.routes.js` (in this folder) define the user API endpoints.
- `__tests__/user.test.js`:
  - Uses **Supertest** to make requests like `GET /users/...`.
  - Asserts on HTTP status codes and JSON responses.
  - Optionally mocks database access for isolated tests.

This connects to the Week 16 material on:
- Testing Express.js endpoints
- Using Supertest with Jest
- Keeping the app export separate from the actual server startup

### Install & Run

From this folder:

```bash
npm install
npm test
```