const express = require("express");
const router = express.Router();
const basketController = require("../controllers/basketController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/add-to-cart", basketController.addToCart);
router.get("/:id", basketController.getProductsFromBasket);

router.get("/", checkRole("ADMIN"), basketController.getAllBaskets);
router.post("/status", checkRole("ADMIN"), basketController.updateStatus);
router.post("/user-order", checkRole("ADMIN"), basketController.getOneBasket);

module.exports = router;