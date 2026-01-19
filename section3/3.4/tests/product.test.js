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

        const res = await request(app).get("/products");

        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBe(1);
        expect(Product.find).toHaveBeenCalled();
    });

        test("POST /products -> should create a new product", async () => {
        const newProduct = { title: "Mouse", price: 50 };
        Product.create.mockResolvedValue(newProduct);

        const res = await request(app).post("/products").send(newProduct);

        expect(res.statusCode).toBe(201);
        expect(res.body.data.title).toBe("Mouse");
        expect(Product.create).toHaveBeenCalledWith(newProduct);
    });

    test("POST /products -> missing price should return 400", async () => {
        const res = await request(app).post("/products").send({ title: "Mouse" });

        expect(res.statusCode).toBe(400);
        expect(Product.create).not.toHaveBeenCalled();
    });
});