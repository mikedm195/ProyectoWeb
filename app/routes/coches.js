var express = require('express');
var router = express.Router();
var controller = require('../controllers/coches');

/* GET home page. */
router.get('/', controller.index);
router.get('/editarCoche/:id', controller.editarCoche);
router.get('/agregarCoche', controller.agregarCoche);
router.post('/agregarCoche', controller.post);
router.put('/editarCoche/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
