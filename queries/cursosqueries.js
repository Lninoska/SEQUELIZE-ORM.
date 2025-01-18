const { Curso } = require('../models');

const crearCurso = async (datos) => {
    return await Curso.create(datos);
}

const obtenerCurso = async () => {
    return await Curso.findAll();
}

const actualizarCurso = async (id, datos) => {
    return await estudiante.update(datos, { where: { id }});
}

const eliminarCurso = async (id) => {
    return await estudiante.destroy({ where: { id }})
}

module.exports = { crearCurso, obtenerCurso, actualizarCurso, eliminarCurso}