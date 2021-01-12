var express = require("express");
var router = express.Router();

const UserController= require("../controller/UserController");
const { route } = require("./auth");

router.get('/',UserController.index);
router.post('/showId',UserController.show);
router.post('/update',UserController.update);
router.post('/delete',UserController.destroy);

module.exports= router;