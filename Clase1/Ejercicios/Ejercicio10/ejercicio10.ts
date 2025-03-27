/*Ejercicio 10: Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y 
boolean. Accede a estas propiedades e imprímelas en la consola.*/

let thisIsMyObject: object = {nombre: "Giselle", edad: 43, estasEmpleada: true}
console.log(`Este es mi objeto: ${JSON.stringify(thisIsMyObject)}`);
