var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');

router.get('/', controller.index);

module.exports = router;
