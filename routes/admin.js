var express = require("express");
var router = express.Router();

const UserController= require("../controller/UserController");
const auth = require('../middleware/authenticate');

router.get('/show',UserController.index);
router.post('/showId',UserController.show);
router.post('/update',UserController.update);
router.post('/delete',UserController.destroy);

module.exports= router;