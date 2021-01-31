const express = require('express');
const router= express.Router();
const AuthController = require("../controller/AuthController");
const upload         = require("../middleware/uploadfile");

router.post('/login',AuthController.login);
router.post('/register',upload.single('avatar'),AuthController.register);
module.exports= router;