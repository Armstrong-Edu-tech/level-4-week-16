const User = require("../models/user.model");
const { getUserNameLogic } = require("../userLogic");

jest.mock("../models/user.model");

beforeEach(() => {
    jest.clearAllMocks(); 
});

test('should return "Ali" from the mock without connecting to MongoDB', async () => {
    User.findById.mockResolvedValue({
        _id: "123",
        name: "Ali",
        email: "ali@example.com",
    });

    const result = await getUserNameLogic("123");

    expect(result).toBe("Ali");
    expect(User.findById).toHaveBeenCalledWith("123");
});