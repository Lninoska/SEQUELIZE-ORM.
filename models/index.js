const sequelize = require('../config/config')
const Estudiante = require('./estudiante')
const Curso = require('./curso')

Estudiante.belongsToMany(Curso, { through: 'estudianteCurso' });
Curso.belongsToMany(Estudiante, { through: 'estudianteCurso' });

module.exports = { sequelize, Estudiante, Curso}