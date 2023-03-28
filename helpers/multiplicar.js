const fs = require('fs');
const colors = require('colors');


const crearArchivo = (base, list, to)=>{
    return new Promise((resolve,reject)=>{
        let salida = ''; 
        let salidaConsole = ''; 
        for(let i = 0 ; i<to; i++){
            const index = i+1;  
            salida += `${index} x ${base} = ${index * base}\n`; 
            salidaConsole +=`${index} ${colors.green('x')} ${base} ${colors.green('=')} ${index * base}\n`; 
        }
    
        fs.writeFile(`output/tabla-${base}.txt`, salida, (err) => {
        if (err) reject(err);
        if(list){
            console.clear(); 
            console.log('========================'.green); 
            console.log(`${colors.green('Tabla del:')} ${colors.yellow(base)}`); 
            console.log('========================'.green);
            console.log(salidaConsole); 
        } 
        resolve(`tabla-${base}.txt`);
        });
    })

}

module.exports = {crearArchivo}
