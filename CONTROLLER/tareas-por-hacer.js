const fs = require('fs');
const colors = require('colors');

let tareaPorHacer = [];

const cargarDB = () =>{
    try{
        tareaPorHacer = require('../db/data.json');
    }catch (error){
        tareaPorHacer = []
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareaPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) throw new Error('No se pudo guardar',err);
    }
    );
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        compleatado : false
    };
    tareaPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const listar = ()=>{
    cargarDB();
    for(var i=0;i<tareaPorHacer.length;i++){
        console.log(tareaPorHacer[i]);
    }
};

const actualizar = (descripcion,compleatado = true) => {
    cargarDB();
    let index = tareaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >=0) {
        tareaPorHacer[index].compleatado = compleatado;
        guardarDB();
        return true;
    }
    return false;
};

const borrar = (descripcion) => {
    cargarDB();
    let index = tareaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >=0) {
        tareaPorHacer.splice(index);
        guardarDB();
        return true;
    }
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

module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
    borrar1
}