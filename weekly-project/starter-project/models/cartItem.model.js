const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true }
});

module.exports = mongoose.model("CartItem", cartItemSchema);