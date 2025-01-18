const { crearEstudiante, obtenerEstudiante, actualizarEstudiante, eliminarEstudiante } = require('./queries/estudiantequeries')
const { crearCurso, obtenerCurso, actualizarCurso, eliminarCurso} = require('./queries/cursosqueries')
const sequelize = require('./config/config')

async function main() {
    try {
        await sequelize.sync({ force:true })
        console.log('Base de datos sincronizada con force true')

        const estudiantenuevo = await crearEstudiante({
            nombres:'Lidia',
            apellidos:'diaz', 
            n_identificacion:'1234556',
            edad: 30 });
        console.log('Estudiantes inscriptos:', estudiantenuevo)

        const cursoNuevo = await crearCurso({
            titulo:'Introduciendo el bootcamp de React', 
            descripcion:'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
        console.log('Se ha creado un nuevo curso:', cursoNuevo);

        const estudiantes = await obtenerEstudiante();
        console.log('Estudiantes:', estudiantes)

        const cursos = await obtenerCurso();
        console.log('Cursos:', cursos)
    } catch(error){
        console.error('Error:', error)
    }
}

main()