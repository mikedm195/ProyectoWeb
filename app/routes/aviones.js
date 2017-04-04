var express = require('express');
var router = express.Router();
var controller = require('../controllers/aviones');

router.get('/', controller.index);
router.get('/editarAvion/:id', controller.editarAvion);
router.get('/agregarAvion', controller.agregarAvion);
router.post('/agregarAvion', controller.post);
router.put('/editarAvion/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
