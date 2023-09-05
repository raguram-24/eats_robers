const express = require('express');
const router = express.Router();
const checkAuth = require('../Middleware/check-auth')
const userControllers = require('../Controllers/user');
const checkAdmin = require('../Middleware/checkAdmin')





router.get('/',  checkAuth , checkAdmin , userControllers.user_get_all)
router.post('/signup', userControllers.createUser )
router.post('/login', userControllers.user_login)
router.delete("/:userId", checkAdmin,checkAuth,userControllers.user_delete)

module.exports = router;