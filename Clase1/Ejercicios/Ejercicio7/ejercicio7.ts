/*Ejercicio 7: Tipos literales
Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
TypeScript*/

let dia : "Lunes" | "Martes" | "Miercoles"

dia = "Lunes"; 
//dia = "Martes"; 
//dia = "Miercoles"; 

console.log("Que dias cursas aleman?", dia); 