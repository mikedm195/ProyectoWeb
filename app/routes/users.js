var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.get('/login', controller.index);

router.post('/verifyLogin', controller.login);

router.get('/editarUsuario', controller.editarUsuario);
router.get('/agregarUsuario', controller.agregarUsuario);
router.post('/agregarUsuario', controller.post);
router.put('/editarUsuario', controller.put);
router.delete('/', controller.delete);

module.exports = router;
