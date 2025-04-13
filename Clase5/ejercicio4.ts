/*Ejercicio 4: Clases y Objetos 
1. Define una clase llamada Animal con propiedades nombre y tipo, y un 
método hacerSonido(). 
2. Crea una instancia de la clase Animal y llama al método.*/ 

class Animal{
    public nombre: string; 
    public tipo: string; 

    constructor(nombre: string, tipo: string){
        this.nombre= nombre; 
        this.tipo= tipo
    }

    public hacerSonido():void{
        console.log(`Este animal se llama ${this.nombre}, y es un ${this.tipo} y le gusta ladrar`)
    }
}

const miAnimal = new Animal("Jack", "perro"); 
miAnimal.hacerSonido()