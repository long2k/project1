const express = require('express');
const router = express.Router();


const groupCon = require('../controller/groupController');
router.post('/group/add',groupCon.addmember);
router.post('/group/updateIn',groupCon.infmember);

module.exports = router;