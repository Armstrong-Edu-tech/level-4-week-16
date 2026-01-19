require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

// connectDB();
const app = express();
app.use(express.json());

app.use("/users", userRoutes);

if(require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    });
}

module.exports = { app };





