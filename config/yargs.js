const descripcion = {
    demand:true,
    alias: 'd'
};
const completado = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear','Crear archivo por hacer',{
        descripcion
    })
    .command('listar','Lista archivo por hacer')
    .command('borrar','Borrar una actividad',{
        descripcion
    })
    .command('actualizar','Actualiza el archivo por hacer',{
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}