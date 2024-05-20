const express = require("express")
const router = express.Router()

const { ControllerCheckout } = require('../controller/ControllerCheckout')

router.post("/", ControllerCheckout)

module.exports = router