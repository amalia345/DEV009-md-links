
// ----------------------imports----------------------
const fs = require("fs");
const path = require('path')
// ----------------------functions----------------------
const mdLinks = (pathArgument, options) => {
  return new Promise((resolve, reject) => {
    let absolutePath; // aqui vamos a guardar la ruta absoluta

    if (path.isAbsolute(pathArgument)) { //isAbsolute chea si es absoluta
      absolutePath = pathArgument // si si lo es solo la guardo
    } else {
      absolutePath = path.resolve(pathArgument) // si no, resolve convierte la rutra relativa a absolutA
    }

    if (fs.existsSync(absolutePath)) { // regresa el resolve la promesa si la ruta del archivo si existe
      const isExtensionMD = checkIfExtensionMD(absolutePath)
      if (isExtensionMD) {
        extractData(absolutePath)
          .then(mdData => {
            const links = extractLinks(mdData,absolutePath)
            resolve([isExtensionMD, links])
          })
          .catch(err => {
            reject("error reading the md file" + err)
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
function extractLinks(data,pathFrom) {
  const fullRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^)]+|www\.[^)]+)\)/g; // regex que saque de google
  let match;
  const linkArray = [] // array donde guardar los resultados
  while ((match = fullRegex.exec(data)) !== null) {
    linkArray.push({
      text: match[1],
      href: match[2],
      file: pathFrom
    });
  }
  return linkArray
}
// ----------------------exports----------------------
module.exports = {
  mdLinks
}
