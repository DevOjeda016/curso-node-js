const fs = require('node:fs/promises');

//Leer archivo con Promises
//Primer archivo
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto\n', text);    
  })
  .catch (err => { 
    console.log(`No se pudo leer el archivo ${ err }`)
  });

  //Segundo Archivo
  fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto\n', text);    
  })
  .catch (err => { 
    console.log(`No se pudo leer el archivo ${ err }`)
  });
