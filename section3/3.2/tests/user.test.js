const request = require("supertest");
const { app } = require("../app");
const User = require("../models/user.model");

jest.mock("../models/user.model");

test("GET /users -> should return users", async () => {
    User.find.mockResolvedValue([
        { _id: "1", name: "Amr", email: "amr@test.com" }
    ]);

    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBe(1);
    expect(User.find).toHaveBeenCalled();
});

test("POST /users -> should create user", async () => {
    User.create.mockResolvedValue({
        _id: "1",
        name: "Amr",
        email: "amr@test.com"
    });
    const res = await request(app)
        .post("/users")
        .send({
            name: "Amr",
            email: "amr@test.com"
        });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.name).toBe("Amr");
    expect(User.create).toHaveBeenCalledWith({
        name: "Amr",
        email: "amr@test.com"
    });
});