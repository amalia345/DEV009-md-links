
// ----------------------imports----------------------
const fs = require("fs"); 
const path = require('path')
// ----------------------functions----------------------
const mdLinks = (pathArgument, options) => {// cambiar nombrea cehcarSiEsMDextension para usarl esta funcion en en otras funciones 
  return new Promise((resolve, reject) => {
    if (fs.existsSync(pathArgument)) { // regresa el resolve la promesa si la ruta del archivo si existe
      const extensionOfFile = path.extname(pathArgument) // la funcion extname nos regresa la extension del archivo que le demnos como argumento
      console.log('path correcto ' + pathArgument + ' extension is :  ' + extensionOfFile);
      let isExtensionMD; // variabel booleana vacia para decirt si el archivo es md o no
      if (extensionOfFile === '.md' || extensionOfFile === '.markdown') {
        isExtensionMD = true
      } else {
        isExtensionMD = false
      }
      resolve(isExtensionMD)
      // imprime la direccion actual del programa
      // usando process argv para ver la direccion del programa 
      //Chequear y convertir a una ruta absoluta

    } else {// regresa el reject de la promesa si la ruta del archivo no existe
      reject('rejected This error means that the file doesnt exist')
    }
    //si no existe rechazamos la promesa
  });
};
// ----------------------exports----------------------
module.exports = {
  mdLinks
}
