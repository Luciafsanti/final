const express = require('express');
const router = express.Router();
const orderController = require("../controllers/order.controller");



router.route("/")
    .get(orderController.getAllOrders)
    .post(orderController.createOrder);

router.route("/:orderId")
    .get(orderController.getOrderById);

router.route("/:orderId/order-detail")
    .get(orderController.getOrderDetails)
    .post(orderController.newOrderDetail);

module.exports = router;