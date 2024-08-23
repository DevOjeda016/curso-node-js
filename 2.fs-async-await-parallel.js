const fs = require('node:fs/promises');


Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo2.txt', 'utf-8')
])
.then(([archivo1, archivo2]) => {
  console.log(archivo1);
  console.log(archivo2);
}) 

(async () => {
  try {
    let text;
    text = await fs.readFile('./archivo.txt', 'utf-8');
    console.log(text);

    text = await fs.readFile('./archivo2.txt', 'utf-8');
    console.log(text)
  } catch (err) {
    console.log(`No se pudo leer el archivo ${ err }`)
  }
})();
