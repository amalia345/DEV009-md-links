const fs = require('fs');
const path = require('path');
const { readMdFile, getAbsolutePath, isMarkdownFile, isDirectory } = require('../index.js');

// Mock de el modulo FS
jest.mock('fs');

// Limpiamos la memoria de los test 
beforeEach(() => {
  jest.clearAllMocks();
});
// ------------------ TEST DE RUTAS  --------------------
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

// ------------------ TEST DE MARKDOWNM --------------------

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


// ------------------ TEST DE DIRECTORIOS --------------------
describe('isDirectory', () => {
  test('should return true if path is a directory', () => {
    fs.lstatSync.mockReturnValue({
      isDirectory: () => true,
    });

    const result = isDirectory('some/directory/path');
    expect(result).toBe(true);
  });
});

test('should return false if path is not a directory', () => {
  fs.lstatSync.mockReturnValue({
    isDirectory: () => false,
  });

  const result = isDirectory('some/file/path');
  expect(result).toBe(false);
});
test('should throw an error if path does not exist', () => {
  fs.lstatSync.mockImplementation(() => {
    throw new Error('Path does not exist');
  });

  expect(() => isDirectory('non/existent/path')).toThrow('Path does not exist');
});
// ------------------ TEST DE DIRECTORIOS --------------------
describe('readMdFile', () => {
  it('Debe regresar el contenido esperado', async () => {

    const pathToTestFile = 'C:\\test.md';
    const expectedContent = `# Sample Markdown File
    This is a test markdown file
    - Here's a link to [Google](https://www.google.com).
    - Visit [GitHub](https://github.com) for code hosting.`;
    try {
      const content = await readMdFile(pathToTestFile);
      console.log(content);
      expect(content).toBe(expectedContent);


    } catch (error) {
      console.error(error);
      expect(error).toBeNull();
    }
});

  test('Regresa un rechazo cuando hay un error leyendo el archivo', () => {
    const dummyError = new Error('Error reading file');
    fs.readFile.mockImplementation((file, encoding, callback) => callback(dummyError));
    return expect(readMdFile('path/to/dummyFile')).rejects.toThrow('Error reading file');
  });
})
