const { where } = require('sequelize');
const { Estudiante } = require('../models');

const crearEstudiante = async (datos) => {
    return await Estudiante.create(datos)
}

const obtenerEstudiante = async () => {
    return await Estudiante.findAll()
}

const obtenerEstudiantePorID = async (id) => {
    return await Estudiante.findByPk(id, { where: { id } })
}

const obtenerElprimero = async (nombres) => {
    return await Estudiante.findOne( { where: {nombres} })
}

const ordenarEstudiantes = async () => {
    return await Estudiante.findAll({order: [['edad', 'ASC']]})
}
const actualizarEstudiante = async (id, datos) => {
    return await Estudiante.update(datos, { where: { id } });
}

const eliminarEstudiante = async (id) => {
    return await Estudiante.destroy({ where: { id } })
}

module.exports = { crearEstudiante, obtenerEstudiante, actualizarEstudiante, eliminarEstudiante, obtenerEstudiantePorID, obtenerElprimero, ordenarEstudiantes }