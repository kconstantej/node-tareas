//se crea una constante que sera un objeto que tendra el demand, alias y desc 
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
    
};
//se crea una constante que sera un objeto que tendra el default, alias y desc 
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

//se crea una constante de tipo yargs
const argv = require('yargs')

//se crea el comando crear con parametros tipo descripcion
.command('crear','Crear una tarea',{
    descripcion
})
//se crea el comando actualizar con parametros tipo descripcion y completado
.command('actualizar','actualizar una tarea',{
    descripcion,
    completado
})
//se crea el comando borrar con parametros tipo descripcion
.command('borrar','borrar una tarea',{
    descripcion
})
//se crea el comando listar con parametros tipo completado
.command('listar','borrar una tarea',{
    completado
}).help().argv;

//se importa los modulos
module.exports = {
    argv
}