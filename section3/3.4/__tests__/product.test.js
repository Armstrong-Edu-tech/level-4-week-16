const request = require("supertest");
const { app } = require("../app");
const Product = require("../models/product.model");

jest.mock("../models/product.model");

describe("Product API", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("GET /products -> should return all products", async () => {
        Product.find.mockResolvedValue([
            { _id: "1", title: "Laptop", price: 1000 }
        ]);

        await request(app)
            .get("/products")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((res) => {
                expect(res.body.data.length).toBe(1);
                expect(Product.find).toHaveBeenCalled();
            });
    });

    test("POST /products -> should create a new product", async () => {
        Product.create.mockResolvedValue({ title: "Mouse", price: 50 });

        await request(app)
            .post("/products")
            .send({ title: "Mouse", price: 50 })
            .expect(201)
            .expect("Content-Type", /json/)
            .expect((res) => {
                expect(res.body.data.title).toBe("Mouse");
                expect(Product.create).toHaveBeenCalledWith({
                    title: "Mouse",
                    price: 50
                });
            });
    });

    test("POST /products -> missing price should return 400", async () => {
        await request(app)
            .post("/products")
            .send({ title: "Mouse" })
            .expect(400)
            .expect((res) => {
                expect(Product.create).not.toHaveBeenCalled();
            });
    });
});