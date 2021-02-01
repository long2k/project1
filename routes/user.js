var express = require("express");
var Userrole= require('../controller/UserController');
var upload = require('../middleware/uploadfile');
var router = express.Router();

router.post('/avatar',upload.single('avatar'),Userrole.AvatarI);

module.exports= router;