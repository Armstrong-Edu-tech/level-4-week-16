const CartItem = require("../models/cartItem.model");
const Order = require("../models/order.model");
const stripeService = require("../services/stripe.service");

exports.createOrder = async (req, res) => {
    try {
        const cartItems = await CartItem.find({ userId: req.user.sub });

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        const amountInCents = total * 100;

        const paymentIntent = await stripeService.createPaymentIntent(amountInCents);

        const createdOrder = await Order.create({
            userId: req.user.sub,
            items: cartItems.map((i) => ({
                productName: i.productName,
                price: i.price,
                qty: i.qty
            })),
            total,
            paymentIntentId: paymentIntent.id
        });

        return res.status(201).json({ data: createdOrder });
    } catch (e) {
        return res.status(500).json({ message: "Server error" });
    }
};