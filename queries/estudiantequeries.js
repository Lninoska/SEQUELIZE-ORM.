const { Estudiante } = require('../models');

const crearEstudiante = async (datos) => {
    return await Estudiante.create(datos)
}

const obtenerEstudiante = async () => {
    return await Estudiante.findAll()
}

const actualizarEstudiante = async (id, datos) => {
    return await Estudiante.update(datos, { where: { id }});
}

const eliminarEstudiante = async (id) => {
    return await Estudiante.destroy({ where: { id }})
}

module.exports = { crearEstudiante, obtenerEstudiante, actualizarEstudiante, eliminarEstudiante }