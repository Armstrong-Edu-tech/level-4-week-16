const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ data: users });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "name and email are required" });
        }

        const created = await User.create({ name, email });
        res.status(201).json({ data: created });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};
