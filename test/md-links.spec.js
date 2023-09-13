const fs = require('fs');
const path = require('path');
const { mdLinks, getAbsolutePath, isMarkdownFile, isDirectory } = require('../index.js');

// Mock the fs module
jest.mock('fs');

// Sample content
const mockMDContent = `
# Sample Markdown
- [Google](http://google.com)
- [OpenAI](https://www.openai.com)
`;

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

describe('mdLinks', () => {

  test('rechaza si el archivo no existe', () => {
    fs.existsSync.mockReturnValue(false);
    return expect(mdLinks('no-existo', {})).rejects.toEqual('This error means that the file doesnt exist.');
  });

  test('resuelve si el archivo si existe', async () => {
    fs.existsSync.mockReturnValue(true);
    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, mockMDContent);
    });

    const result = await mdLinks('archivo-existe.md', {});
    expect(result).toBeDefined();
  });

  test('Prueba Final debe recibir 2 objetos con los 5 campos', async () => {
    fs.existsSync.mockReturnValue(true);
    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, mockMDContent);
    });

    const result = await mdLinks('mockfile.md', { validate: true });

    expect(result.length).toBe(2);
    expect(result[0]).toEqual({
      text: 'Google',
      href: 'http://google.com',
      file: expect.any(String),
      status: 200,
      statusText: 'ok'
    });
    expect(result[1]).toEqual({
      text: 'OpenAI',
      href: 'https://www.openai.com',
      file: expect.any(String),
      status: 200,
      statusText: 'ok'
    });
  });
});
// ------------------HITO 3 --------------------
describe('isDirectory', () => {
  it('Regresa true para directorios', () => {
    const resultado = isDirectory(__dirname);
    expect(resultado).toBe(true)
  });
  it('Regresa false para archivos', () => {
    const resultado = isDirectory(__filename);
    expect(resultado).toBe(false)
  });
})