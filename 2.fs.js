const fs = require('node:fs');

//Leer archivo de manera asincrona con callbacks
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

//Leer archivo de manera sincrónica
try {
  const data = fs.readFileSync('./archivo.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(`No se pudo leer el archivo ${ err } `);
}
