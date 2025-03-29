/*Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre 
de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es 
proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y 
muestra el resultado en la consola.*/

function saludar(name: string, greeting?: string): string {

    if(greeting){
        return `${greeting}, ${name}`
    }

    return `Holis!, ${name}`
    
}

console.log(saludar("Giselle"));

