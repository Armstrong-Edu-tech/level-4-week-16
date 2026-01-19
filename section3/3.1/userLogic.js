const User = require("./models/user.model");

const getUserNameLogic = async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    return user.name;
};

module.exports = { getUserNameLogic };