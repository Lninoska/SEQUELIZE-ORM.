const { crearEstudiante, obtenerEstudiante, actualizarEstudiante, eliminarEstudiante, obtenerEstudiantePorID, obtenerElprimero, ordenarEstudiantes } = require('./queries/estudiantequeries')
const { crearCurso, obtenerCurso, actualizarCurso, eliminarCurso, obtenerCursoPorID, obtenerUno, ordenarCursos} = require('./queries/cursosqueries')
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

        const estudiantenuevoDos = await crearEstudiante({
            nombres:'Kitty',
            apellidos:'Song', 
            n_identificacion:'1234567',
            edad: 21 });
        console.log('Estudiantes inscriptos:', estudiantenuevoDos)

        const estudiantenuevoTres = await crearEstudiante({
            nombres:'Cinthia',
            apellidos:'Vial', 
            n_identificacion:'24278405',
            edad: 22 });
        console.log('Estudiantes inscriptos:', estudiantenuevoTres)

        const cursoNuevo = await crearCurso({
            titulo:'Introduciendo el bootcamp de React', 
            descripcion:'React es la librería más usada en JavaScript para el desarrollo de interfaces.'})
        console.log('Se ha creado un nuevo curso:', cursoNuevo);

        const cursoDos = await crearCurso({
            titulo:'Introducion a HTML', 
            descripcion:'Lo basico para aprender a crear sitios webs.'})
        console.log('Se ha creado un nuevo curso:', cursoNuevo);


        const estudiantes = await obtenerEstudiante();
        console.log('Estudiantes:', estudiantes)
        const cursos = await obtenerCurso();
        console.log('Cursos:', cursos)

        const estudianteID = await obtenerEstudiantePorID(2)
        console.log('Se ha encontrado el Id del estudiante:', estudianteID)

        const CursoID = await obtenerCursoPorID(1)
        console.log('Se ha encontrado el Id del curso:', CursoID)

        const Estudianteuno = await obtenerElprimero('kitty')
        console.log('Se encontrado los estudiantes con este nombre:', Estudianteuno)

        const cursoUno = await obtenerUno('Introduciendo el bootcamp de React')
        console.log('Se ha encontrado el curso:', cursoUno)

        const estudiantesordenados = await ordenarEstudiantes()
        console.log('Estudiantes ordenados:', estudiantesordenados)

        const cursosOrdenados = await ordenarCursos()
        console.log('Cursos ordenados', cursosOrdenados)

        const actualizarEstudianteNuevo = await actualizarEstudiante(1, {apellidos:'Marin'})
        console.log('Estudiante actualizados:', actualizarEstudianteNuevo)

        const actualizarNuevoCurso = await actualizarCurso(1, {titulo:'indtroduccion a React'})
        console.log('Curso Actualizado', actualizarNuevoCurso)
        
        const EstudianteEliminado = await eliminarEstudiante (2)
        console.log('Estudiantes eliminados', EstudianteEliminado)
    } catch(error){
        console.error('Error:', error)
    }
}

main()