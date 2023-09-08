
// ----------------------imports----------------------
const fs = require("fs");
const path = require('path')
const axios = require('axios');
const { error } = require("console");
// ----------------------variables----------------------
const LINK_REGEX = /\[([^\]]+)\]\((http[s]?:\/\/[^)]+|www\.[^)]+)\)/g; // regex que saque de google
const MD_EXTENSIONS = ['.md', '.markdown']

// ----------------------mdlinks----------------------
const mdLinks = (pathArgument, options) => {
  console.log('1 Entering Md links function');
  return new Promise((resolve, reject) => {
    const absolutePath = getAbsolutePath(pathArgument)
    if (fs.existsSync(absolutePath)) {
      if (isMarkdownFile(absolutePath)) {
        readMdFile(absolutePath) // el contenido de readmd file s eguarda ne data
          .then(data => {
            console.log('2 File read success');
            extractLinks(data, absolutePath, options)
          })
          .then(markdownLinks => {
            console.log('3 extracted links');
            resolve(markdownLinks)
          })
          .catch(err => {
            console.log('4 error in mdlinks');
            reject("Error reading the md file " + err)
          });
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
function extractLinks(data, pathFrom, validate) {
  let match;
  const linkArray = [] // array donde guardar los resultados
  while ((match = LINK_REGEX.exec(data)) !== null) {
    linkArray.push(checkLinkStatus({
      text: match[1],
      href: match[2],
      file: pathFrom
    }, validate));
  }
  return Promise.all(linkArray)
}

function checkLinkStatus(linksObject, validate) {
  if (validate) {
    return Promise.resolve(linksObject)
  } else {
    return axios.get(linksObject.href)
    .then(response => {
      console.log('5 Succesful response gfor link '+ linksObject.href);
      linksObject.status = response.status;
      linksObject.statusText = linksObject.status >= 200 && linksObject.status < 400 ? 'ok' : 'fail';
      console.log('6 Succesful response gfor link ', linksObject);
      return linksObject
    })
    .catch(error => {
      console.log('7 error checnado links');
      linksObject.status = error.response ? error.response.status : 'error'
      linksObject.statusText = 'fail';
      console.log('8 error response gfor link '+ linksObject.href);
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
  mdLinks
}
