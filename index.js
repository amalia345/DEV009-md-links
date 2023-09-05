
// ----------------------imports----------------------
const fs = require("fs");
const path = require('path')
// ----------------------functions----------------------
const mdLinks = (pathArgument, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(pathArgument)) { // regresa el resolve la promesa si la ruta del archivo si existe
      const isExtensionMD = checkIfExtensionMD(pathArgument)
      if (isExtensionMD) {
        extractData(pathArgument)
          .then(mdData => {
            resolve([isExtensionMD, mdData])
          })
          .catch(err => {
            reject("error reading the md file" +err)
          })
      }
      else {
        resolve([isExtensionMD, null])
      }
    } else {
      reject('rejected This error means that the file doesnt exist')
    }
    //si no existe r`echazamos la promesa
  });
};


function checkIfExtensionMD(parameter) {
  const extensionOfFile = path.extname(parameter) // la funcion extname nos regresa la extension del archivo que le demnos como argumento
  if (extensionOfFile === '.md' || extensionOfFile === '.markdown') {
    return true
  } else {
    return false
  }
}

function extractData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  });
}
// ----------------------exports----------------------
module.exports = {
  mdLinks
}
