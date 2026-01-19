require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

connectDB();

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = { app };