

const argvYargs = require('./config/config-yargrs').argvYargs;

const { crearArchivos} = require('./multiplicar/multiplicar.js');

let numb = argvYargs.numb
let limite =argvYargs.limite


crearArchivos(numb,limite)
.then(archivo=>{console.log(`el archivo ${archivo} fue creado con exito`)})
.catch(e=>console.log(e));


