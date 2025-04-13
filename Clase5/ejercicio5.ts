/*Ejercicio 5: Interfaz 
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
método presentarse(). 
2. Crea una clase llamada Persona que implemente esta interfaz y 
proporciona la implementación del método presentarse().*/

interface IPersona{
    nombre: string; 
    edad: number; 
    presentarse():void;

}

class Persona implements IPersona{

    nombre: string; 
    edad: number; 

    constructor(nombre: string, edad: number){
    this.nombre = nombre; 
    this.edad = edad;  
    }

    presentarse(): void {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anios`);
        
    }
}

const miPersona = new Persona("Giselle", 43); 
miPersona.presentarse()