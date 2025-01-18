const { Curso } = require('../models');

const crearCurso = async (datos) => {
    return await Curso.create(datos);
}

const obtenerCurso = async () => {
    return await Curso.findAll();
}

const obtenerCursoPorID = async(id) => {
    return await Curso.findByPk(id, { where: { id }})
}

const obtenerUno= async(titulo) => {
    return await Curso.findOne( {where: {titulo}  } )
}
const actualizarCurso = async (id, datos) => {
    return await Curso.update(datos, { where: { id }});
}

const ordenarCursos = async () => {
    return await Curso.findAll({order: [['titulo', 'ASC']]})
}
const eliminarCurso = async (id) => {
    return await Curso.destroy({ where: { id }})
}

module.exports = { crearCurso, obtenerCurso, actualizarCurso, eliminarCurso, obtenerCursoPorID, obtenerUno, ordenarCursos}