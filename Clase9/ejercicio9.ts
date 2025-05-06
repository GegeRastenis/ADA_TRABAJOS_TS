/*Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo 
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una 
clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa 
métodos para moverse por el mapa y realizar acciones. Define una interfaz 
EntidadMovible que contenga el método moverse. Usa herencia para que Pac
Man y los fantasmas compartan el comportamiento de moverse y polimorfismo 
para que cada personaje pueda implementar su propio comportamiento de 
movimiento.*/

interface EntidadMovible{
    moverse():void
}

abstract class Personaje implements EntidadMovible{
    nombre: string; 
    color: string; 


    constructor(nombre: string, color: string){
        this.nombre = nombre; 
        this.color = color
    }

    describirPersonaje():string{
        return `Personaje: ${this.nombre}, su color caracteristico es el: ${this.color}`;
        
    }

    abstract moverse(): void; 
}

class PacMan extends Personaje implements EntidadMovible{
    constructor(nombre: string, color: string){
        super(nombre, color)
    }

    describirPersonaje(): string{
      return `Personaje: ${this.nombre}, su color caracteristico es: ${this.color}`
        
    }

    moverse(): void {

        console.log(`El personaje conocido como ${this.nombre} se mueve con el objetivo de devorar puntos`);
        
        
    }
}

class Fantasma extends Personaje implements EntidadMovible{
    constructor(nombre: string, color: string){
        super(nombre, color)
    }

    describirPersonaje(): string{
      return `Personaje: ${this.nombre}, su color caracteristico es: ${this.color} `
        
    }

    moverse(): void {
        console.log(`El personaje conocido como ${this.nombre} se mueve con el objetivo de devorar a los PacMans `);
        
    }
}

const pm = new PacMan("Pac Man", "Rojo"); 
console.log(pm.describirPersonaje()); 
pm.moverse(); 

const fM = new Fantasma("Fantasma", "Blanco"); 
console.log(fM.describirPersonaje());
fM.moverse(); 
