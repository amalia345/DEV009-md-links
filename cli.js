//import chalk  from "chalk";
// pORQUE CHALK NO FUNCIONA EN MODULOS ES, SI PONGO 'TYPE MODULES' ENTONCES LOS 'REQUIRE' YA NO SIRVEN, PERO EN NPM CHALK DICE QUE ES AFUERZXAS IMPORT
//import { mdLinks } from "../DEV009-md-links/index.js";
const{ mdLinks } = require( './index.js');

let path1 = '../DEV009-md-links/index.js'
let path2 = '../DEV@09-mh-links/index.jgs'
let path3 = '../DEV009-md-links/myFile.md'

mdLinks(path3)
.then((promiseResolve)=>{
    //console.log(chalk.blue('hola desde el cli'));
    if (promiseResolve) {
        console.log('The file exists and its an markdown file');
        // mandara llamar a otra FUNCION QUE SAQUE EL CONTENIDO DEL ARCHIVO READFILE Y RS PROMISES
        // EL CONTENIDO DEL ARCHIVO GUARDALO EN UN ARRAY
        // CEHCAR EL ARRAY PARA BUSCAR LINKS Y GUARDAR ESOS LINKS EN OTRO ARRAY
        // DEL NUEVO ARRAY CEHCAR CON UN CICLO SI LOS LINKS FUNCIONAN O NO
    } else {
        console.log('The file exist but is not a markdown file');
    }
})
.catch((error)=> {
    console.log(error);
});
