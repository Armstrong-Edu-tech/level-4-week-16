require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/order.routes");

// connectDB();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

if (require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}

module.exports = { app };