//se crea una constante de tipo yargs
const argv = require('./config/yargs').argv;
//se crea una constante de la clase tareas-por.hacer y se denomina tareas
const tareas = require('./CONTROLLER/tareas-por-hacer');
//se crea una constante de tipo clors
const colors = require('colors');
//se crea un comando
let comando = argv._[0];
//se crea una variable de tipo tareas que es la constante que se creo anteriormente
let tarea = tareas;
//se crea un menu segun el comando que se ingrese
switch (comando){
    //en el caso de que sea  crear
    case 'crear':
        //se se llama al metodo crear de la constante  tareas y se le envia la descripcion que entra  por teclado
        tareas.crear(argv.descripcion);
        //se imprime crear tarea
        console.log("crear tarea");
        //sale del crear
        break;
    //en el caso que sea listar
    case 'listar':
        //se crea dos vectores el uno guardara los que sean true y el otro los q sean false
        var estado_true = [];
        var estado_false = [];
        //se imprime listar tarea
        console.log("listar tarea");
        // se crea un vector que guardara toda las las tareas que devolvera el metodo listar
        var lista=tareas.listar();
        //el for va a recorrer el vector creado que guarda todas las tareas
        for(var i=0;i<lista.length;i++){
            //si el completado de la tarea de esta iteracion es igual a true
            if (lista[i].completado===true || lista[i].completado==='true'){
                //entonces guarda en el vector estado_true la tarea de esta iteracion 
                estado_true.push(lista[i]);
            //si no    
            }else{
                //entonces guarda en el vector estado_false la tarea de esta iteracion
                estado_false.push(lista[i]);
            }

        }
        //si el completado que ingresa por teclado es igual a true
        if(argv.completado===true || argv.completado==='true'){
            //entonces se impirme el vector estado_true 
            console.log(estado_true);
        //si no
        }else{
            //entonces se impirme el vector estado_false
            console.log(estado_false);
        }
        //sale del listar
        break;
    //en caso que sea actializar
    case 'actualizar':
        //se guarda en actualizado lo que devuleve el metodo actualizar al cual se le envia la descripcion y el completado que ingresa por teclado
        let actualizado=tarea.actualizar(argv.descripcion,argv.completado)
        //se imprime actualizado 
        console.log(actualizado);
        //sale del actualizar
        break;
    //en caso que sea borrar
    case 'borrar':
        // se guarda en borrado lo que devuelve el metodo borra1 al cual se le envia la descripcion ingresada por teclado
        let borrado=tarea.borrar1(argv.descripcion)
        //se imprime borrado
        console.log(borrado);
        //sale del borrar
        break;
    //si el comando ingresado no esta en el switch    
    default:
        //se imprime comando no reonocido
        console.log('comando no reconocido');
}