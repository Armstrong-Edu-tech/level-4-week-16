const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ data: products });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { title, price } = req.body;

        if (!title || price === undefined) {
            return res.status(400).json({ message: "title and price are required" });
        }

        const created = await Product.create({ title, price });
        res.status(201).json({ data: created });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};