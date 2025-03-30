/*Ejercicio 10: Funciones y arrays de objetos
Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
función debe recorrer el array y mostrar los detalles de cada libro en la consola*/

type libro = {titulo: string, autor: string}

let libros : libro []= [
    {titulo: "Mi planta de naranja lima", autor: "Jose de Vasconcelos"}, 
    {titulo: "Cien anios de soledad", autor: "Gabriel Garcia Marquez"}, 
    {titulo: "Rosaura a las diez", autor: "Marco Denevi"}
]

function listarLibros(libros: libro[]): void {
    libros.forEach(libros => {
        console.log(`Titulo: ${libros.titulo}, Autor: ${libros.autor}`)
    })
}

listarLibros(libros)