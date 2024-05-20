const productController = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.get("/", productController.list);
router.get("/:product", productController.find);
router.post("/", productController.create);
router.patch("/:product", productController.update);
router.delete("/:product", productController.destroy);

module.exports = router;
