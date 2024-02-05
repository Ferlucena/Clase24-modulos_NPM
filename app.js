/**
 * Objetivo: Familiarizarse con npm y el uso de paquetes npm en proyectos de Node.js.
 * 1- Inicializar un proyecto Node.js mediante npm init-y
 * 2- Vamos a instalar un paquete npm muy simple llamado lodash, npm install lodash
 * 3- Crea un archivo app.js importamos lodash y utilizamos la funcion random para obtener un número matemático
*/

//3- importamos lodash y utilizamos la funcion random para obtener un número matemático
const miNumero = require('lodash');
console.log(miNumero.random(1,100));

//4- Ejecutamos el comando desde la consola con node app.js