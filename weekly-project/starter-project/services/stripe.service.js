const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(amountInCents) {
    return stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd"
    });
}

module.exports = { createPaymentIntent };