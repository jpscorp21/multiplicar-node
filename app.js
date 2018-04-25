//Es un paquete 
const argv = require('./config/yargs').argv;
const colors = require('colors');

//Es una destructuracion de las funciones que hay en el otro archivo, de acuerdo a la necesidad
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];


switch(comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `.green + `${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
