/*Ejercicio 9: Funciones con retorno void y manipulación de objetos
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y 
encendido (booleano). Define una función encenderCoche que acepte el objeto 
coche y cambie el valor de encendido a true. Muestra el estado del coche en la 
consola antes y después de llamar a la función.*/

let coche : {marca: string, modelo: string, encendido: boolean, encenderCoche: Function} = {

    marca : "Renault", 
    modelo: "Captur", 
    encendido: false,

    encenderCoche(coche:object, encendido: boolean):any {
    let cocheEncendido = this.encendido = true 
    return cocheEncendido
    }
}

console.log(`Este es el valor del coche antes de encender: ${coche.encendido}`)
console.log(`Este es el valor del coche una vez encendido: ${coche.encenderCoche()}`)

