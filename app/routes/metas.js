var express = require('express');
var router = express.Router();
var controller = require('../controllers/metas');

/* GET home page. */
router.get('/', controller.index);
router.get('/editarMeta/:id', controller.editarMeta);
router.get('/agregarMeta', controller.agregarMeta);
router.post('/agregarMeta', controller.post);
router.put('/editarMeta/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
