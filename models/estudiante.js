const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    n_identificacion: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Estudiante;
