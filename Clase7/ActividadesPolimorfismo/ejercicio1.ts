/*Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación) 
Implementa una clase Calculadora que tenga un método sumar. El método debe 
estar sobrecargado para permitir la suma de: 
• Dos números enteros. 
• Tres números enteros. 
• Dos cadenas, concatenando las dos cadenas.*/

class Calculadora{
    sumar(a: number, b: number):number; 

    sumar(a: number, b: number, c: number): number; 

    sumar(a: string, b: string): string; 


    sumar(a:any, b: any, c?:any):any{
        if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
            return a + b + c
        }if(typeof a === "number" && typeof b === "number" && typeof c === "undefined"){
            return a + b
        }if (typeof a === "string" && typeof b === "string" && typeof c === "undefined"){
            return a + b 
        }else{
            console.log("Parametros ingresados no validos");
            
        }
    }
}

const sumatoria = new Calculadora
console.log(sumatoria.sumar(2, 8)); 
console.log(sumatoria.sumar(2, 10, 11)); 
console.log(sumatoria.sumar("Good ", "morning!")); 



