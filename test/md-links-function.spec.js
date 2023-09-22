const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
    it('Debe regresar una resolucion de la promesa', () => {
        const filePath = 'C:\\test.md';
        const options = { validate: true }; // Opciones de validación habilitadas

        return mdLinks(filePath, options).then((result) => {
            expect(Array.isArray(result)).toBe(true);
        });
    });

    it('Debe regresar un error si la promesa es rechazada', () => {
        return expect(mdLinks('no-existo', {})).rejects.toEqual('File or directory does not exist');
    });
});