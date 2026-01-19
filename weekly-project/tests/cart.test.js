const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../app");
const CartItem = require("../models/cartItem.model");

jest.mock("../models/cartItem.model");

function token() {
    return jwt.sign({ id: "user123", email: "test@test.com" }, process.env.JWT_SECRET);
}

describe("Cart CRUD", () => {
    test("GET /cart -> no token returns 401", async () => {
        const res = await request(app).get("/cart");
        expect(res.statusCode).toBe(401);
    });

    test("GET /cart -> returns items", async () => {
        CartItem.find.mockResolvedValue([{
            _id: "1", productName: "Mouse", price: 50, qty: 2
        }]);

        const res = await request(app)
            .get("/cart")
            .set("Authorization", `Bearer ${token()}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBe(1);
        expect(CartItem.find).toHaveBeenCalled();
    });

    test("POST /cart -> creates item", async () => {
        CartItem.create.mockResolvedValue({ _id: "1",
            userId: "user123",
            productName: "Keyboard",
            price: 100,
            qty: 1
        });

        const res = await request(app)
            .post("/cart")
            .set("Authorization", `Bearer ${token()}`)
            .send({ productName: "Keyboard", price: 100, qty: 1 });

        expect(res.statusCode).toBe(201);
        expect(res.body.data.productName).toBe("Keyboard");
        expect(CartItem.create).toHaveBeenCalled();
    });

    test("PUT /cart/:id -> updates item", async () => {
        CartItem.findOneAndUpdate.mockResolvedValue({
            _id: "item1",
            productName: "Keyboard",
            price: 100,
            qty: 3
        });

        const res = await request(app)
            .put("/cart/item1")
            .set("Authorization", `Bearer ${token()}`)
            .send({ qty: 3 });

        expect(res.statusCode).toBe(200);
        expect(res.body.data.qty).toBe(3);
        expect(CartItem.findOneAndUpdate).toHaveBeenCalled();
    });

    test("DELETE /cart/:id -> deletes item", async () => {
        CartItem.findOneAndDelete.mockResolvedValue({
            _id: "item1",
            productName: "Keyboard",
            price: 100,
            qty: 1
        });

        const res = await request(app)
            .delete("/cart/item1")
            .set("Authorization", `Bearer ${token()}`);

        expect(res.statusCode).toBe(200);
        expect(CartItem.findOneAndDelete).toHaveBeenCalled();
    });
});