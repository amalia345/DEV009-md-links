const fs = require('fs');
const path = require('path');
const { mdLinks, getAbsolutePath, isMarkdownFile, isDirectory } = require('../index.js');

// Mock the fs module
jest.mock('fs');

// Reset or clear the mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

describe('getAbsolutePath', () => {

  test('Regresa el mismo si ya es absoluta la ruta', () => {
    const absoluteInput = '\\home\\user\\some\\absolute\\path';
    expect(getAbsolutePath(absoluteInput)).toEqual(absoluteInput);
  });

  test('Regresa una ruta absoluta si es relativa', () => {
    const relativeInput = 'relative\\path';
    const expectedOutput = path.resolve(relativeInput);
    expect(getAbsolutePath(relativeInput)).toEqual(expectedOutput);
  });
});



describe('isMarkdownFile', () => {

  test('Regresa True si es .md', () => {
    expect(isMarkdownFile('ejemplo1.md')).toBe(true);
  });

  test('Regresa True si es .markdown', () => {
    expect(isMarkdownFile('ejemplo2.markdown')).toBe(true);
  });

  test('Regresa False si es .txt o otra extension', () => {
    expect(isMarkdownFile('ejemplo3.txt')).toBe(false);
  });

  test('Regresa False si no tiene extension', () => {
    expect(isMarkdownFile('ejemplo4')).toBe(false);
  });
});


// ------------------HITO 3 --------------------
describe('isDirectory', () => {
  it('Regresa true para directorios', () => {
    const resultado = isDirectory('C:\Users\beles\data');
    expect(resultado).toBe(true)
  });
  it('Regresa false para archivos', () => {
    const resultado = isDirectory('C:\Users\beles\datasda');
    expect(resultado).toBe(false)
  });
})