const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {
    //return new Promise((resolve, reject) => {
        if (!Number(base)) {
            console.log(`El valor introducido ${base} no es un numero`);
        }

        console.log(`=================================`.green)
        console.log(`Tabla de ${ base }`.green)
        console.log(`=================================`.green)
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;            
            
        }
        console.log(data);
    //});
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        //Para crear un archivo, reescribe en caso del archivo 
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                throw reject(err);
            else 
                resolve(`tabla-${base}.txt`.yellow)            
        })
    })
}

//Para usar la exportacion
module.exports = {
    crearArchivo,
    listarTabla
}

