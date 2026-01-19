const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const cartController = require("../controllers/cart.controller");

router.get("/", auth, cartController.getCart);
router.post("/", auth, cartController.addToCart);
router.put("/:id", auth, cartController.updateCartItem);
router.delete("/:id", auth, cartController.deleteCartItem);

module.exports = router;