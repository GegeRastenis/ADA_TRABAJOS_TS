/*Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa 
los modificadores de acceso para controlar la visibilidad de las propiedades*/ 

abstract class Vehiculo{
    protected velocidad: number; 

    constructor(velocidad:number){
        this.velocidad = velocidad
    }

    abstract mover():void
}

class Auto extends Vehiculo{
    constructor(velocidad: number){
    super(velocidad)  
    }

    public mover(): void {
        console.log(`El auto se mueve a ${this.velocidad} km por hora`);
        
    }
}

class Bicicleta extends Vehiculo{
    constructor(velocidad:number){
        super(velocidad)
    }
    public mover(): void {
        console.log(`La bicicleta se mueve a ${this.velocidad} km por hora`);
        
    }
}

const automovil = new Auto(100); 
automovil.mover(); 
const bike = new Bicicleta(15); 
bike.mover()