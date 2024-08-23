const fs = require('node:fs/promises');

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
