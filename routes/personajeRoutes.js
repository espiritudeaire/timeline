const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

router.get('/', personajeController.listarPersonajes);
router.get('/new', personajeController.nuevoPersonajeForm);
router.post('/', personajeController.crearPersonaje);
router.get('/:id/edit', personajeController.editarPersonajeForm);
router.post('/:id', personajeController.actualizarPersonaje);
router.post('/:id/delete', personajeController.eliminarPersonaje);

module.exports = router;