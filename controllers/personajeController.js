const Personaje = require('../models/personajeModel');

exports.listarPersonajes = async (req, res) => {
    const personajes = await Personaje.find();
    res.render('personajes/index', { personajes });
};

exports.nuevoPersonajeForm = (req, res) => {
    res.render('personajes/new');
};

exports.crearPersonaje = async (req, res) => {
    await Personaje.create(req.body);
    res.redirect('/personajes');
};

exports.editarPersonajeForm = async (req, res) => {
    const personaje = await Personaje.findById(req.params.id);
    res.render('personajes/edit', { personaje });
};

exports.actualizarPersonaje = async (req, res) => {
    await Personaje.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/personajes');
};

exports.eliminarPersonaje = async (req, res) => {
    await Personaje.findByIdAndDelete(req.params.id);
    res.redirect('/personajes');
};