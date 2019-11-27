const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
.command('crear','Crear una tarea',{
    descripcion
}).command('actualizar','actualizar una tarea',{
    descripcion,
    completado
}).command('borrar','borrar una tarea',{
    descripcion
}).help().argv;

module.exports = {
    argv
}