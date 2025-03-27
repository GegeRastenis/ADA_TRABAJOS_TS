/*Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
valores.*/

let valor : unknown; 

valor = "Hola!, soy un texto"; 
if(typeof valor === "string"){
    console.log(`El valor es una cadena: ${valor}`);
}else{
    console.log("El valor no es una cadena");
}

valor = 53; 
if(typeof valor === "number"){
    console.log(`El valor es un numero: ${valor}`);
}else{
    console.log("El valor no es un numero");
}

valor = true; 
if(typeof valor === "boolean"){
    console.log(`El valor es un dato de tipo boleano: ${valor}`);
}else{
    console.log("El valor no es un dato de tipo booleano");
}

valor = {nombre:"Pedro", edad: 35}; 
if(typeof valor === "object" && valor !== null ){
   console.log(`El valor es un objeto: ${JSON.stringify(valor)}`);
}else{
   console.log("El valor no es un objeto");
}

valor = undefined; 
if(typeof valor === "undefined"){
   console.log(`El valor es del tipo indefinido: ${valor}`);
}else{
   console.log("El valor no es del tipo indefinido");
}