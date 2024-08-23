//Importar manual el nombre de cada funcion del modulo
// import { hostname, release, arch, cpus, totalmem, freemem, networkInterfaces, uptime } from 'node:os';
/*import { hostname, release, arch, cpus, totalmem, freemem, networkInterfaces, uptime } from 'node:os';
console.log('Información del sistema operativo :)');
console.log('__________________________________');
console.log('Nombre del sistema operativo: ', hostname());
console.log('Versión del sistema operativo: ', release);
console.log('Arquitectura: ', arch());
console.log('CPUs: ', cpus());
console.log('Memoria total: ', totalmem() / (Math.pow(2, 30)));
console.log('Memoria libre: ', freemem() / (Math.pow(2, 30)));
console.log('Interfaces de internet: ', networkInterfaces().lo[0].address);
console.log('UpTime: ', uptime() / 3600 );
*/

//Importar el modulo completo
import os from 'node:os';
console.log('Información del sistema operativo :)');
console.log('__________________________________');
console.log('Nombre del sistema operativo: ', os.hostname());
console.log('Versión del sistema operativo: ', os.release);
console.log('Arquitectura: ', os.arch());
console.log('CPUs: ', os.cpus());
console.log('Memoria total: ', os.totalmem() / (Math.pow(2, 30)));
console.log('Memoria libre: ', os.freemem() / (Math.pow(2, 30)));
console.log('Interfaces de internet: ', os.networkInterfaces().lo[0].address);
console.log('UpTime: ', os.uptime() / 3600 );