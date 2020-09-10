const fs = require('fs');
const colors = require('colors');
const { listarArchivo } = require('../../03-bases-node/multiplicar/multiplicar');
let listadoPorHacer = [];
const guardarDB=()=>{

     let data= JSON.stringify(listadoPorHacer);
      
     fs.writeFile('db/data.json',data,(err) => {
        if (err) throw new Error('No se pudo guardar '.err); 
        else 
            console.log(`Archivo guardado con EXITO`.green);
      });
}

const cargarDB =() =>{
    
    try {
        listadoPorHacer =  require('../db/data.json');

    } catch (error) {
        listadoPorHacer=[];
    }
    
}
const getListado = () =>{

    cargarDB();
    return listadoPorHacer;
}


const  crear = (descripcion)=>{

    cargarDB();

    let  porHacer ={
        descripcion,
        completado: false
    }; 

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const actualizar=(descripcion,completado = true ) =>{
     cargarDB();

     let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion) ;
     console.log(listadoPorHacer);
     if(index >=0){
         listadoPorHacer[index].completado =completado;
         guardarDB();
         return true; 
     }else{
        return false;
     }
}
const borrar = (descripcion) =>{
    cargarDB();
        let nuevoListado = listadoPorHacer.filter(tarea=>{
            return tarea.descripcion !== descripcion
        });
     if(listadoPorHacer.length === nuevoListado.length){
         return false;
     }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return  true;
     }
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}