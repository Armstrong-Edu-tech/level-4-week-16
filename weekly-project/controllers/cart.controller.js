const CartItem = require("../models/cartItem.model");

exports.getCart = async (req, res) => {
    try {
        const items = await CartItem.find({ userId: req.user.sub });
        return res.status(200).json({ data: items });
    } catch (e) {
        return res.status(500).json({ message: "Server error" });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { productName, price, qty } = req.body;

        if (!productName || price === undefined || qty === undefined) {
            return res.status(400).json({ message: "productName, price, qty are required" });
        }

        const created = await CartItem.create({
            userId: req.user.sub,
            productName,
            price,
            qty
        });

        return res.status(201).json({ data: created });
    } catch (e) {
        return res.status(500).json({ message: "Server error" });
    }
};

exports.updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { qty } = req.body;

        const updated = await CartItem.findOneAndUpdate(
            { _id: id, userId: req.user.sub },
            { qty },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        return res.status(200).json({ data: updated });
    } catch (e) {
        return res.status(500).json({ message: "Server error" });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await CartItem.findOneAndDelete({ _id: id, userId: req.user.sub });
        if (!deleted) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        return res.status(200).json({ data: deleted });
    } catch (e) {
        return res.status(500).json({ message: "Server error" });
    }
};