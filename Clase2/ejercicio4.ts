/*Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
titulo (string), autor (string) y paginas (number). La función debe devolver un 
objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
muestra sus detalles en la consola.*/

function crearLibro(title: string, author: string, pages: number): object {
    return {title, author, pages}

}; 

let elPrincipito: object = crearLibro("El Principito", "Saint Exupery", 120); 
let miPlanta: object = crearLibro("Mi Planta de Naranja Lima", "Jose de Vasconcelos", 150); 
console.log(elPrincipito, miPlanta);


