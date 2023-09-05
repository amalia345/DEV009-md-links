
// ----------------------imports----------------------
const fs = require("fs");
const path = require('path')
// ----------------------variables----------------------
const LINK_REGEX = /\[([^\]]+)\]\((http[s]?:\/\/[^)]+|www\.[^)]+)\)/g; // regex que saque de google
const MD_EXTENSIONS = ['.md', '.markdown']

// ----------------------mdlinks----------------------
const mdLinks = (pathArgument) => {
  return new Promise((resolve, reject) => {
    const absolutePath = getAbsolutePath(pathArgument)
    if (fs.existsSync(absolutePath)) { 
      if (isMarkdownFile(absolutePath)) {
        readMdFile(absolutePath) // el contenido de readmd file s eguarda ne data
          .then(data => extractLinks(data,absolutePath))
          .then(markdownLinks => resolve (markdownLinks))
          .catch(err => reject("Error reading the md file"));
      }
      else {
        resolve([isExtensionMD, null])
      }
    } else {
      reject('rejected This error means that the file doesnt exist')
    }
  });
};

// ----------------------functions----------------------
function isMarkdownFile(filePath) {
  return MD_EXTENSIONS.includes(path.extname(filePath))
}

function readMdFile(file) {
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
function extractLinks(data, pathFrom) {
  let match;
  const linkArray = [] // array donde guardar los resultados
  while ((match = LINK_REGEX.exec(data)) !== null) {
    linkArray.push({
      text: match[1],
      href: match[2],
      file: pathFrom
    });
  }
  return linkArray
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
  mdLinks
}
