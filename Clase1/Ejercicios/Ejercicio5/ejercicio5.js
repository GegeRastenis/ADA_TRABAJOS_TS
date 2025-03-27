"use strict";
/*Ejercicio 5: Datos nulos y diferenciados
Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript*/
let eresCasado = null;
if (eresCasado === null) {
    console.log("Eres casado?", eresCasado, "No sabe, no responde... ");
}
else {
    console.log("Eres casado?, ", eresCasado, "todavia lo estoy");
}
//En TypeScript null representa la ausencia intencional de valor
