const express = require('express');
const router = express.Router();
const checkAuth = require('../Middleware/check-auth')
const restaurantController = require ('../Controllers/restaurant')
const checkAdmin = require ('../Middleware/checkAdmin')

router.get('/',restaurantController.restaurant_get_all);
router.get('/:restaurantId',restaurantController.restaurant_get_byid)
router.post('/',restaurantController.restaurant_post);
router.patch('/:restaurantId',checkAuth,checkAdmin,restaurantController.restaurant_patch) 
router.delete('/:restaurantId',checkAuth,checkAdmin,restaurantController.restaurant_delete);

module.exports = router; 