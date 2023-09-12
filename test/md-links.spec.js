/* const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */



const fs = require('fs')
const axios = require('axios')

const { mdLinks }= require('../index.js');

jest.mock('fs')

describe('mdLinks', () => {

  test('rechaza si el archivo no existe',() =>{
    fs.existsSync.mockReturnValue(false)
    return mdLinks('no-existo',{}).catch(e => {
      expect(e).toEqual('rejected This error means that the file doesnt exist')
    });
  });

  test('recibe 3 objetos si todo esta bien',() =>{
    const validPath = 'path/valid/valid-file.md'
    const linkContent = '[Google](https://www.google.com)'
          
    fs.existsSync.mockReturnValue(false)

    fs.readFile.mockImplementation((path,encoding,callback)=> {
      if (path ===validPath) {
        callback(null,linkContent)
      } else {
        callback(new Error('File not found'))
      }
    })

    return mdLinks(validPath,{validate:false}).then(links => {
      expect(links).toHaveLength(1);
    });
  });

  // it('should...', () => {
  //   console.log('FIX ME!');
  // });
  // it('Return a promise ', () => {
  //   expect ( mdLinks()).toBe(typeof Promise);
  // });



/*   it(' Decline when the path dont exist', () => {
  return mdLinks('/erika/cursos/noexist.md').catch((error) =>{
    expect (error).toBe('La ruta no existe')
  }) 
  
  }); */
});


//funcion asincrona