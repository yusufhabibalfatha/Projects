const express = require("express");
const router = express.Router();

const { getProducts, postProduct } = require("../controller/ControllerProducts");
const { saveImage } = require("../middleware/DirectoryImage")

router.get("/", getProducts);
router.post("/", saveImage.single("image"), postProduct)

module.exports = router;