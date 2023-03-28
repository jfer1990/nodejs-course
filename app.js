
const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar'); 
const argv = require('./config/yargs')

console.clear(); 


console.log(process.argv); 
console.log(argv); 


const base = argv.b; 
const list = argv.l;
const to = argv.t; 

crearArchivo(base, list, to)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err=>console.log(err)); 