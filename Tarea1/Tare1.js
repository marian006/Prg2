const readlineSync = require('readline-sync');

const cantidadProductos = +readlineSync.question('Ingrese la cantidad de productos: ');

let costoTotalFlete = 0;
let mayorVolumen = 0;
let impuesto = 0;
let impuestoTotalFlete = 0;

for (let i = 0; i < cantidadProductos; i++) {
    const numeroEmpaque = readlineSync.question(`Ingrese el número del empaque ${i + 1}: `);
    
    if (numeroEmpaque < 1 || numeroEmpaque > 3) {
        console.error("El número de empaque no es válido");
        continue;
    }

    const anchoProducto = +readlineSync.question(`Ingrese el ancho del producto ${i + 1}: `);
    if (anchoProducto < 0) {
        console.error("El ancho del producto no es válido");
        continue; 
    }

    const altoProducto = +readlineSync.question(`Ingrese el alto del producto ${i + 1}: `);
    if (altoProducto < 0) {
        console.error("El alto del producto no es válido");
        continue;
    }

    const profundidadProducto = +readlineSync.question(`Ingrese la profundidad del producto ${i + 1}: `);
    if (profundidadProducto < 0) {
        console.error("La profundidad del producto no es válida");
        continue;
    }

    const volumen = (anchoProducto * altoProducto * profundidadProducto)*100;

   
    
    if (volumen > 1000 && volumen < 10000) {
        impuesto = volumen * 0.1;
    } 
       else if (volumen > 10000) {
         impuesto = volumen * 0.2;
    }

   
    const costoTotalProducto = (volumen + impuesto) ;

    costoTotalFlete += costoTotalProducto;

    
    if (volumen > mayorVolumen) {
        mayorVolumen = volumen; 
    }

    impuestoTotalFlete += impuesto;
}




 const promediodelflete = costoTotalFlete/cantidadProductos;

console.info(`El costo total del flete es: ${costoTotalFlete}`);
console.info(`Producto de mayores dimensiones: ${mayorVolumen}`);
console.info(`Promedio total del flete es: ${promediodelflete}`);
console.info(`El impuesto total por el flete es: ${impuestoTotalFlete}`);