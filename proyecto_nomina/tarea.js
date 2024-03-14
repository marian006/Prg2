const readlineSync = require('readline-sync');

const numerodeempleados = +readlineSync.question('Ingrese el numero de empleados: ');

let costoTotalNomina = 0;
let costoHombres = 0;
let costoMujeres = 0;
let empleadoMasCostoso = "";
let costoMasCostoso = 0;
let subsidioTotalSecundaria = 0;
let costoVuelosExtranjeros = 0;

const X = 100; // Valor del subsidio para hijos en primaria
const Y = 200; // Valor del subsidio para hijos en universidad
const Z = 300; // Valor del subsidio para hijos en secundaria

const salario = +readlineSync.question(`Ingrese el salario: `);

for (let i = 0; i < numerodeempleados; i++) {
    
    const estrato = +readlineSync.question(`Ingrese el estrato ${i + 1}: `);
    const rural = readlineSync.question(`¿El empleado ${i + 1} vive en área rural? (si/no): `);
    let hijosprimaria = +readlineSync.question(`Ingrese la cantidad de hijos en primaria del empleado ${i + 1}: `);
    let hijosSecundaria = +readlineSync.question(`Ingrese la cantidad de hijos en secundaria del empleado ${i + 1}: `);
    const extranjero = readlineSync.question(`¿El empleado ${i + 1} es extranjero? (si/no): `);

    let subsidio = 0;

    if (estrato < 1 || estrato > 3) {
        console.error("El número de estrato no es válido");
    } else if (estrato === 1) {
        subsidio = 0.15 * salario;
    } else if (estrato === 2) {
        subsidio = 0.10 * salario;
    } else if (estrato === 3) {
        subsidio = 0.05 * salario;
    }

    if (rural === "si" || rural === "no") {
        if (rural === "si") {
            subsidio += 35000;
        }
    } else {
        console.error("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
        continue;
    }

    const subsidioHijos = hijosprimaria * X + hijosSecundaria * Z;
    subsidio += subsidioHijos;

    if (extranjero === "si" || extranjero === "no") {
        if (extranjero === "si") {
            costoVuelosExtranjeros += 2 * 50000;
        }
    } else {
        console.error("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
        continue;
    }

    const costoTotalEmpleado = salario + subsidio;
    costoTotalNomina += costoTotalEmpleado;

    const genero = readlineSync.question(`¿El empleado ${i + 1} es hombre? (si/no): `);
    if (genero === "si" || genero === "no") {
        if (genero === "si") {
            costoHombres += costoTotalEmpleado;
        } else {
            costoMujeres += costoTotalEmpleado;
        }
    } else {
        console.error("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
        continue;
    }

    if (costoTotalEmpleado > costoMasCostoso) {
        empleadoMasCostoso = `Empleado ${i + 1}`;
        costoMasCostoso = costoTotalEmpleado;
    }

    subsidioTotalSecundaria += hijosSecundaria * Z;

    console.info(`El costo total de la nomina del empleado ${i + 1} es : ${costoTotalEmpleado}`);
}

console.info(`El costo total de la nomina es : ${costoTotalNomina}`);
console.info(`La nomina de los hombres es : ${costoHombres}`);
console.info(`La nomina de las mujeres es : ${costoMujeres}`);
console.info(`El empleado al que le pagan mas es : ${empleadoMasCostoso}`);
console.info(`El valor que la empresa se esta gastando en subsidios para los hijos de la secundaria es : ${subsidioTotalSecundaria}`);
console.info(`El valor que la empresa se esta gastando en pasajes para los empleados extranjeros es : ${costoVuelo}`);
