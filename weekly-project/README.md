## Weekly Project – Unit Testing E‑Commerce API with Jest

This folder contains the **Week 16 project**: an Express-based **E‑Commerce API** focused on **unit and integration testing with Jest**. You will write and run tests for cart functionality, order creation, payment processing, and authenticated login, and analyze Jest coverage reports.

- **Prerequisites**: Node.js, npm, and (optionally) a running MongoDB instance if you enable real DB connections.
- **Install dependencies**: `npm install`
- **Run tests**: `npm test`

### What it does

- **Authentication**:
  - User login with JWT-based authentication
  - Protected routes that require a valid `Authorization: Bearer <token>` header
- **Cart**:
  - Add items to cart
  - List items in the current user’s cart
  - Update and delete cart items
- **Orders & Payments**:
  - Create orders from cart items
  - Integrate with a Stripe-like payment service through a `stripe.service.js` layer
- **Testing & Coverage**:
  - Jest tests using **Supertest** for HTTP routes
  - Jest mocks for models and services (e.g., cart items, Stripe)
  - Coverage reports generated under `coverage/`


### Structure

- `app.js` – Express application setup (mounts all routes and exports `app`)
- `config/db.js` – Database connection configuration
- `controllers/`
  - `auth.controller.js` – Handles user authentication and token generation
  - `cart.controller.js` – Manages cart CRUD operations
  - `order.controller.js` – Handles order creation and related logic
- `middleware/`
  - `auth.middleware.js` – JWT authentication/authorization middleware
- `models/`
  - `user.model.js` – User schema/model
  - `cartItem.model.js` – Cart item schema/model
  - `order.model.js` – Order schema/model
- `routes/`
  - `auth.routes.js` – `/auth` endpoints (e.g., login)
  - `cart.routes.js` – `/cart` endpoints (CRUD)
  - `order.routes.js` – `/orders` endpoints (order creation)
- `services/`
  - `stripe.service.js` – Encapsulates Stripe payment logic for easier mocking
- `tests/`
  - `auth.test.js` – Tests for authentication and login flows
  - `cart.test.js` – Tests for cart CRUD operations (with mocked `CartItem` model)
  - `order.test.js` – Tests for order creation and payment flow
- `coverage/` – Jest-generated coverage reports (HTML, lcov, etc.)
- `starter-project/` – Same API structure without tests so you can write your own suites from scratch


### Environment Variables

Create a `.env` file in this folder with values similar to:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=mongodb://localhost:27017/armstrong-week16
STRIPE_SECRET_KEY=sk_test_your_key_here
```

If you are **only running tests with mocked DB and services**, you may not need a live MongoDB/Stripe instance, but `JWT_SECRET` should always be set so token-related tests work.


### Running the Project

From inside `weekly-project`:

```bash
npm install        # install dependencies
npm test           # run Jest test suites (auth, cart, orders)
node app.js
```

Once the server is running, it will listen on `http://localhost:5000` (or the port from `PORT`).


### Example Endpoints (Conceptual)

- **Auth**
  - `POST /auth/login` – Log in with valid credentials, receive a JWT
- **Cart**
  - `GET /cart` – Get current user’s cart items (requires JWT)
  - `POST /cart` – Add a new item to the cart
  - `PUT /cart/:id` – Update an existing cart item
  - `DELETE /cart/:id` – Remove an item from the cart
- **Orders**
  - `POST /orders` – Create an order from the user’s cart and trigger payment via the Stripe service


### Coverage

After running `npm test`, open:

- `coverage/lcov-report/index.html`

in your browser to explore coverage by file (controllers, middleware, models, routes, and services). Aim for high coverage on:

- Auth login flow and protected routes
- Cart CRUD operations
- Order creation and payment logic (with mocked Stripe)