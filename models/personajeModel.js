const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    nombre: String,
    pais: String,
    epoca: String,
    descripcion: String
});

module.exports = mongoose.model('Personaje', personajeSchema);