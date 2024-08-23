const path = require('node:path');

//Separador depenede de SO (UNIX, Windows)
console.log(path.sep);
rutaPrueba = path.join('carpExterna', 'carpInterna', 'carp', 'index.js');
extensionFile = path.extname(rutaPrueba);

console.log('Ruta: ' + rutaPrueba);

console.log('Name file: ' + path.basename(rutaPrueba));
console.log('Base name file: ' + path.basename(rutaPrueba, extensionFile));
console.log('Extension: ' + extensionFile);

