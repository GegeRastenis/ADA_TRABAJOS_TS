"use strict";
/*Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre.*/
let nuevoNombre = "Jack";
let newAge = 8;
if (newAge === undefined) {
    console.log("Edad no proporcionada");
}
else {
    console.log(`Buenas! Mi nombre es ${nuevoNombre} y tengo ${newAge} anios`);
}
