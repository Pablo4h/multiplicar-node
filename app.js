const argv = require('./config/yargs').argv;

var colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicqar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite).then(mensaje =>
                console.log(`Tabla: ${mensaje}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo =>
                console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv);
//console.log('Limite', argv.limite);
/*
 */