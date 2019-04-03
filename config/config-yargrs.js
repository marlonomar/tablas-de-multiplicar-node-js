
const comandos = {
    numb:{
        demand: true,
        alias:'n'
    },
    limite:{
        alias:'l',
        default:10
    }
};

const argvYargs = require('yargs')
                    .command('crear',': este comando sirve para imprimir en consola la tabla de multiplicar del numero y limite deseado',comandos)
                    .command('listar',': este comando sirve para listar en consola la tabla de multiplicar del numero y limite deseado',comandos)
                    .help()
                    .argv;

module.exports={
    argvYargs
}