const fs = require('fs');



function leer(nombreArchivo){
let rawdata = fs.readFileSync(nombreArchivo);
let student = JSON.parse(rawdata);

let  prueba = student.vendedores;
var count = 0;
for (x in prueba){
    console.log('Este es el id: '+ prueba[count].id + "\nNombre: "+prueba[count].nombre + "\n");
    count++;
}
}








