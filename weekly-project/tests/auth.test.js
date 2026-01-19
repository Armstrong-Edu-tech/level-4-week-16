const request = require("supertest");
const { app } = require("../app");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

jest.mock("../models/user.model");
jest.mock("bcrypt");

describe("Auth", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("POST /auth/login -> valid credentials returns token", async () => {
        User.findOne.mockResolvedValue({ _id: "user123",
            email: "test@test.com",
            passwordHash: "hashed_pw"
        });
        bcrypt.compare.mockResolvedValue(true);
        const res = await request(app).post("/auth/login").send({
            email: "test@test.com",
            password: "1234"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        expect(User.findOne).toHaveBeenCalledWith({ email: "test@test.com" });
        expect(bcrypt.compare).toHaveBeenCalledWith("1234", "hashed_pw");
    });

    test("POST /auth/login -> invalid password returns 401", async () => {
        User.findOne.mockResolvedValue({
            _id: "user123",
            email: "test@test.com",
            passwordHash: "hashed_pw"
        });
        bcrypt.compare.mockResolvedValue(false);
        const res = await request(app).post("/auth/login").send({
            email: "test@test.com",
            password: "wrong"
        });
        expect(res.statusCode).toBe(401);
    });

    test("POST /auth/login -> user not found returns 401", async () => {
        User.findOne.mockResolvedValue(null);

        const res = await request(app).post("/auth/login").send({
            email: "test@test.com",
            password: "1234"
        });

        expect(res.statusCode).toBe(401);
    });
});