/*Ejercicio 2: Creación de Objetos y Atributos 
1. Define un objeto que represente un libro con las siguientes propiedades: 
título, autor, y año de publicación. 
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.*/


/*Ejercicio 3: Métodos en Objetos 
1. Modifica el objeto del ejercicio anterior para que incluya un método 
llamado descripcion() que devuelva una descripción del libro. 
2. Llama al método y muestra el resultado en la consola.*/

class Libros{
    titulo: string; 
    autor: string; 
    anio: number; 

    constructor(titulo: string, autor: string, anio: number){
        this.titulo = titulo; 
        this.autor = autor; 
        this.anio = anio
    }

    descripcion(): void{
        console.log(`Este libro es ${this.titulo}, del autor ${this.autor}, escrito en el anio ${this.anio}`);
        
    }
}; 

const libroNuevo = new Libros("Cien anios de soledad", "Gabriel Garcia Marquez", 1990); 
console.log(libroNuevo);
libroNuevo.descripcion();


