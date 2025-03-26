"use strict";
let anyValue = "Hola soy Any";
console.log(anyValue);
anyValue = 42;
console.log(anyValue);
anyValue = { name: "Typescript" };
console.log(anyValue);
let unknowValue = "Hola soy Unknow";
console.log(unknowValue);
function logMessage(message) {
    console.log(message);
}
console.log("Esto es una funcion void");
function infiniteBucle() {
    while (true) {
        console.log("Este bucle nunca termina!!!");
    }
}
infiniteBucle();
