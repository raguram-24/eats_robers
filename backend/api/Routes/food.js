const express = require('express');
const checkAuth = require('../Middleware/check-auth')
const router = express.Router();
const foodController = require ('../Controllers/food');
const checkAdmin = require('../Middleware/checkAdmin');




router.get('/',foodController.food_get_all);
router.get('/:foodId',foodController.food_get_byid);
router.post('/',foodController.food_post);
router.patch('/:foodId',checkAuth,checkAdmin,foodController.food_patch);
router.delete('/:foodId',checkAuth,checkAdmin,foodController.food_delete);

module.exports = router; 