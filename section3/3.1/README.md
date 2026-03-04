## Topic 3.1 – Testing Business Logic with Jest & Mongoose Mocks

This folder is part of **Armstrong Level 4 – Week 16: Unit Testing with Jest**, Section 3 (Advanced Testing Techniques). It focuses on **testing business logic** that depends on a Mongoose model by using Jest mocking.

### What it does

- `userLogic.js` defines:
  - `getUserNameLogic(id)`:
    - Calls `User.findById(id)`
    - Throws an error if no user is found
    - Returns the user’s `name` when found
- `models/user.model.js` defines the `User` Mongoose model used by the logic.
- `__tests__/userLogic.test.js` typically:
  - Mocks `User.findById`
  - Tests the successful path (returns a name)
  - Tests the failure path (throws "User not found")

This matches the Week 16 topics on:
- Mocking functions and modules
- Isolating business logic from the database

### Install & Run

From this folder:

```bash
npm install
npm test
```