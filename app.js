const argv = require('./config/yargs').argv;
const tareas = require('./CONTROLLER/tareas-por-hacer');
const colors = require('colors');
let comando = argv._[0];
let tarea = tareas
switch (comando){
    case 'crear':
        tareas.crear(argv.descripcion);
        console.log("crear tarea");
        break;
    case 'listar':
        console.log("listar tarea");
        tareas.listar();
        break;
    case 'actualizar':
        let actualizado=tarea.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado=tarea.borrar1(argv.descripcion)
        console.log(borrado);
        break;    
    default:
        console.log('comando no reconocido');
}