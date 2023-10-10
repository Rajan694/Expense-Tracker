const express = require("express");
const profileController = require("../controllers/profile.js");
const loginController = require('../controllers/login.js');
const router = express.Router();


router.get('/user', profileController.getUser);


router.post('/login', loginController.loginUser)
module.exports = router;
