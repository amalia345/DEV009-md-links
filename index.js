
// ----------------------imports----------------------
const fs = require("fs"); // FS es un modulo nativo de node, me ayuda a interactuar con archivos del sistema
const path = require('path') // otro nodulo de node ayuda a trabajar con rutas path de archivos y directorios
const axios = require('axios'); // nos ayuda a hacer solicitudes a paginas http 


// ----------------------variables----------------------
const LINK_REGEX = /\[([^\]]+)\]\((http[s]?:\/\/[^)]+|www\.[^)]+)\)/g; // regex que saque de google para checar si teneomos http o wwww en links
const MD_EXTENSIONS = ['.md', '.markdown'] // las extensiones de tipo markdown

// ----------------------mdlinks----------------------
const mdLinks = (pathArgument, options) => { // argumentos 1 la ruta del archivo 2 true o false par ver si validamos los links
  return new Promise((resolve, reject) => {

    const absolutePath = getAbsolutePath(pathArgument) // usando la funcion getAbsolute convierto el path a absoluto

    if (fs.existsSync(absolutePath)) {  // checo si el archivo existe
      if (isDirectory(absolutePath)) {
        // guardar los archivos del directotio en una variable
        // a ese lista de archivos aplicarle la funcion is amrkdownFile con un for o con filter
        //quedaron con una lsita unicamente de archivos tipo md

        // a cada archivo aplciarle la misma funcion mdlinks estoe s recursividad

        //.then regresar un arreglo con todos los resultados con resolve
        //.ctach mandar un error egenral letyendo los directorios

        console.log('es un directorio');
        return 'Pormesa directoprio'
      }
      //Si no es directorio haz lo normal
      else if (isMarkdownFile(absolutePath)) { // si el archivo existe ahora checho si es un archivo markdown
        readMdFile(absolutePath) // si es un archivo amrkon lo leo usando la funcion ReadMDFILE
          .then(data => {         // si se resuelve la funcion guardamos lo que nos regresa en una variable llamada data
            return extractLinks(data, absolutePath, options)  // usamos la variabel data como prametro de la funcione para extraer los links
          })
          .then(markdownLinks => { // resolvemos la promesa principal con los links que nos regresa extractLinks guardandolos en markdownLinks
            resolve(markdownLinks) // y mandamos esos markdownlinks al CLI
          })
          .catch(err => { // error por si falla la fupromesa despues d eller el archiivo
            reject("Error reading the md file " + err)
          });
      }
      else {
        reject('This File is not a markdwon file.') // rechaza la promesa si el archivo no es de marcado
      }
    } else {
      reject('This error means that the file doesnt exist.') // rechaza la promesa si el archivo no existe
    }
  });
};

// ----------------------functions----------------------
function isMarkdownFile(filePath) { //cehca si el archivo esm arkdown
  return MD_EXTENSIONS.includes(path.extname(filePath)) // usnado includes es decir si el sting de la ruta incluye el texto .md o .markdown
}

function isDirectory(inputPath) {
  return fs.statSync(inputPath).isDirectory();
}

function readMdFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => { // usamos fs para leer el archivo y utf-8 para llerlo como letras y no codigo biinario o hexadecimal
      if (err) { // si hay un error manda el codigo de error y rechaza la promesa
        reject(err)
      } else { // si todo sale bien regresamos los datos de adentro del archivo
        resolve(data)
      }
    });
  });
}
function extractLinks(data, pathFrom, validate) { // recibe la informacion del archivo md, la ruta y la opcion de validar o no
  let match;
  const linkArray = [] // array donde guardar los resultados
  while ((match = LINK_REGEX.exec(data)) !== null) { // usamos el regez apra encontrasr los que si son links
    linkArray.push(checkLinkStatus({
      text: match[1], // usando el regez vamos a meter lo que esta en corchetes cuadrados [google]
      href: match[2], // usando el regex vamos a meter el li9nk entree parentesis (www.google.com)
      file: pathFrom // guardmos en file la ruta que traemos en el progrma
    }, validate)); // mandamos el argumandto de valdiar a la funciion check linkstatyus
  }
  return Promise.all(linkArray)
}

function checkLinkStatus(linksObject, validate) {
  if (!validate) { // si es false le mandamos la informacion como ya la tenemos solo 3 campos
    return Promise.resolve(linksObject)
  } else {  // si es true le mandamos los dos campos nuevos par avalidar http
    return axios.get(linksObject.href) // pedimos a xios que analice los links
      .then(response => { // si es correcto el link  gaurdmoas su status y un texto apra indicar ok
        linksObject.status = response.status;
        linksObject.statusText = linksObject.status >= 200 && linksObject.status < 400 ? 'ok' : 'fail';
        return linksObject
      })
      .catch(error => { // si falla rechazzamos la promesa
        linksObject.status = error.response ? error.response.status : 'error'
        linksObject.statusText = 'fail';
        return linksObject
      });
  }
}



const getAbsolutePath = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    return inputPath
  } else {
    return path.resolve(inputPath)
  }
}
// ----------------------exports----------------------
module.exports = {
  mdLinks,
  getAbsolutePath,
  isMarkdownFile,
  isDirectory
}
