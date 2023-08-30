/* const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */

const { mdLinks }= require('../index.js');


describe('mdLinks', () => {

  // it('should...', () => {
  //   console.log('FIX ME!');
  // });
  // it('Return a promise ', () => {
  //   expect ( mdLinks()).toBe(typeof Promise);
  // });
  it(' Decline when the path dont exist', () => {
  return mdLinks('/erika/cursos/noexist.md').catch((error) =>{
    expect (error).toBe('La ruta no existe')
  })
  
  });
});


//funcion asincrona