//Argumentos de entrada
import process from 'node:process';
import fs from 'node:fs/promises';
import path from 'node:path';

const folder = process.argv[2] ?? '.';
console.log(`Folder listado: ${folder == '.' ? `${folder} (Raiz)` : folder}`);
(async () => {
    let lsFiles = [];
    let lsDirs = [];
    try {
        const files = await fs.readdir(folder);
        for (const file of files) {
            const filePath = path.join(folder, file);
            const stats = await fs.stat(filePath);
            const isDirectory = stats.isDirectory();
            const fileSize = stats.size.toString();
            const lastModified = stats.mtime.toLocaleDateString().toString();
            if (isDirectory) {
                lsDirs.push(propertiesFile(file, fileSize, lastModified));
            } else {
                lsFiles.push(propertiesFile(file, fileSize, lastModified));
            }
        }
    } catch (err) {
        console.log(`No se pudo leer el directorio ${err}`);
        process.exit(1);
    }
    
    lsDirs.map(dir => console.log(`${dir.name.padEnd(40)} ${dir.size.padStart(5)} ${dir.modified.padStart(10)}`));
    lsFiles.map(file => console.log(`${file.name.padEnd(40)} ${file.size.padStart(5)} ${file.modified.padStart(10)}`));
})()

function propertiesFile(file, fileSize, lastModified) {
    return {
        name: file,
        size: fileSize,
        modified: lastModified
    }
}