const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        items: [
            {
                productName: String,
                price: Number,
                qty: Number
            }
        ],
        total: { type: Number, required: true }, // dollars
        paymentIntentId: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);