//import chalk  from "chalk";
// pORQUE CHALK NO FUNCIONA EN MODULOS
//import { mdLinks } from "../DEV009-md-links/index.js";
const{ mdLinks } = require( './index.js');
const c = require('ansi-colors');


let path1 = '../DEV009-md-links/index.js'
let path2 = '../DEV@09-mh-links/index.jgs'
let path3 = '../DEV009-md-links/myFile.md'

mdLinks(path3)

.then((promiseResolve)=>{
    const isMarkdown= promiseResolve[0]
    const linksExtracted=  promiseResolve[1]

    if (isMarkdown) {
        console.log(c.bgGreen('The file exists and its an markdown file'));
        console.log(linksExtracted);

        // mandara llamar a otra FUNCION QUE SAQUE EL CONTENIDO DEL ARCHIVO READFILE Y RS PROMISES
        // EL CONTENIDO DEL ARCHIVO GUARDALO EN UN ARRAY
        // CEHCAR EL ARRAY PARA BUSCAR LINKS Y GUARDAR ESOS LINKS EN OTRO ARRAY
        // DEL NUEVO ARRAY CEHCAR CON UN CICLO SI LOS LINKS FUNCIONAN O NO
    } else {
        console.log(c.bgMagenta('The file exist but is not a markdown file'));
    }
})
.catch((error)=> {
    console.log(c.bgRed(error));
});

