//se crea una constante de tipo fs la cual nos permitira el manejo de files
const fs = require('fs');
//se crea una constante de tipo colors
const colors = require('colors');
//se crea un vector que guardara las tareas
let tareaPorHacer = [];

//se crea una funcion que denomina cargarDB
const cargarDB = () =>{
    //manejamos errores con un try y catch
    try{
        //se guarda en tareaPorHacer lo que hay en el archivo data.json que esta guardado en la ruta especificada
        tareaPorHacer = require('../db/data.json');
    }catch (error){
        //el vector se queda vacio
        tareaPorHacer = []
    }
}
//se crea el metodo guardarDB
const guardarDB = () => {
    //en data se va a transformar lo que hay en el vector tareaPorHacer en sintaxis json
    let data = JSON.stringify(tareaPorHacer);
    //se guarda en un archivo json lo que hay en data
    fs.writeFile('db/data.json',data,(err)=>{
        //se maneja los errores
        if (err) throw new Error('No se pudo guardar',err);
    }
    );
}
//se crea unn metodo crear que recive la descripcion 
const crear = (descripcion) => {
    //se llama al metodo cargarDB
    cargarDB();
    //se crea un vector de objetos con descripcion y completado que es igual a false
    let tarea = {
        descripcion,
        completado : false
    };
    //se guarda en el vector tareaPorHacer el vector de objetos tarea
    tareaPorHacer.push(tarea);
    //se llama a la funcion guardarDB
    guardarDB();
    //se retorna el vector tarea
    return tarea;
}
//se crea la funcion listar 
const listar = ()=>{
    //se llama a la funcion cargarDB
    cargarDB();
    // se retorna el vector tareaPorHacer
    return tareaPorHacer;
};
//se crea la funcion actualizar que requiere la descripcion  y el completado que es true
const actualizar = (descripcion,completado = true) => {
    //se llama a la funcion cargarDB
    cargarDB();
    //se guarda en index, de el vector tareaPorHacer la tarea que tenga la descripcion igual a la descripcion que llega de teclado
    let index = tareaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //si index es mayor o igual 0
    if (index >=0) {
        //entonces se guarda true en completado en la tarea index del vector teraPorHacer 
        tareaPorHacer[index].completado = completado;
        //se llama a la funcion guardarDB
        guardarDB();
        //retorna true
        return true;
    }
    //retorna false
    return false;
};
//se crea una funcion llamada borrar que requiere la descripcion
const borrar = (descripcion) => {
    // se llama a la funcion cargarDB
    cargarDB();
    //se guarda en index, de el vector tareaPorHacer la tarea que tenga la descripcion igual a la descripcion que llega de teclado
    let index = tareaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //si el index es mayor o igual que 0
    if (index >=0) {
        //entonces se elimina de tareaPorHacer la tarea  que sea igual al index 
        tareaPorHacer.splice(index);
        //se llama a la funcion guardarDB
        guardarDB();
        //se retorna true
        return true;
    }
    //se retorna false
    return false;
};

const borrar1 = (descripcion)=> {
    cargarDB();
    let nuevoListado = tareaPorHacer.filter(tarea => tarea.descripcion != descripcion);
    if (nuevoListado.length === tareaPorHacer.length){
        return false;
    }else{
        tareaPorHacer = nuevoListado
        guardarDB();
        return true;
    }
}

//funciones que se exportaran
module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
    borrar1
}