const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../app");
const CartItem = require("../models/cartItem.model");
const Order = require("../models/order.model");
const stripeService = require("../services/stripe.service");

jest.mock("../models/cartItem.model");
jest.mock("../models/order.model");

// Mock the Stripe service specifically
jest.mock("../services/stripe.service", () => ({
    createPaymentIntent: jest.fn()
}));

function token() {
    return jwt.sign({ id: "user123", email: "test@test.com" }, process.env.JWT_SECRET);
}

describe("Orders (payment + create order)", () => {
    test("POST /orders -> no token returns 401", async () => {
        const res = await request(app).post("/orders");
        expect(res.statusCode).toBe(401);
    });

    test("POST /orders -> cart empty returns 400", async () => {
        CartItem.find.mockResolvedValue([]);

        const res = await request(app)
            .post("/orders")
            .set("Authorization", `Bearer ${token()}`);

        expect(res.statusCode).toBe(400);
        expect(Order.create).not.toHaveBeenCalled();
        expect(stripeService.createPaymentIntent).not.toHaveBeenCalled();
    });

    test("POST /orders -> creates order after mocked payment", async () => {
        CartItem.find.mockResolvedValue([{ productName: "Mouse", price: 50, qty: 2 }]);
        stripeService.createPaymentIntent.mockResolvedValue({ id: "pi_test_123" });
        Order.create.mockResolvedValue({
            _id: "order1",
            userId: "user123",
            items: [{ productName: "Mouse", price: 50, qty: 2 }],
            total: 100,
            paymentIntentId: "pi_test_123"
        });

        const res = await request(app)
            .post("/orders")
            .set("Authorization", `Bearer ${token()}`);

        expect(res.statusCode).toBe(201);
        expect(res.body.data.paymentIntentId).toBe("pi_test_123");
        expect(res.body.data.total).toBe(100);
        expect(stripeService.createPaymentIntent).toHaveBeenCalledWith(100 * 100);
        expect(Order.create).toHaveBeenCalled();
    });
});