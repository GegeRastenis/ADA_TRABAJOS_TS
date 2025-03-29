/*Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
empleado con las propiedades nombre (string) y salario (number), y un número 
que represente el porcentaje de aumento. La función debe aumentar el salario 
del empleado y devolver el nuevo salario. Muestra en la consola el resultado.*/

let empleado : {nombre: string, salarioEnUsd: number, aumentarSalario: Function} ={
nombre: "Pablo Ramirez",
salarioEnUsd: 1000,

aumentarSalario(empleado: object, porcentajeDeAumento: number): any{

    let nuevoSalario : number = this.salarioEnUsd + ((porcentajeDeAumento * this.salarioEnUsd)/100); 
    return nuevoSalario
  }
}

console.log(empleado.aumentarSalario(empleado, 20));
