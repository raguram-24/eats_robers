const express = require('express');
const router = express.Router();
const checkAuth = require('../Middleware/check-auth');
const checkAdmin = require('../Middleware/checkAdmin')
const OrderController = require( '../Controllers/order');

router.get('/',OrderController.orders_get_all );

router.post('/' ,checkAuth, OrderController.orders_create_order);

router.get('/:orderId' ,checkAuth,checkAdmin, OrderController.orders_get_order);

router.delete('/:orderId',OrderController.orders_delete_order );

router.patch("/:orderId", checkAuth,checkAdmin,OrderController.order_patch);

module.exports = router;