/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
Diseña un sistema de transporte público. Define: 
• Una interfaz VehiculoElectrico con el método cargarBateria(). 
• Una clase abstracta Transporte con el método abstracto mover(). 
Implementa ambas estructuras en una clase concreta AutobusElectrico. */

interface VehiculoElectrico{
    cargarBateria():void
}

abstract class Transporte{

    constructor(nombreVehiculo: string){}

    abstract mover(): void
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{

    constructor(){
     super("Autobus Electrico")
    }

    cargarBateria(): void {
        console.log("El vehiculo esta inicializando la carga de bateria");
        
    }

    mover(): void {
        console.log("El vehiculo ha comenzado a moverse");
        
    }
}

const mercedesBenz = new AutobusElectrico(); 
mercedesBenz.cargarBateria(); 
mercedesBenz.mover()