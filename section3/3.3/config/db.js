const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_URI =
        process.env.MONGO_URI;

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
};

module.exports = connectDB;