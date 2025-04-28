/*Comparación Completa - Sistema de Transporte Público 
Diseña un sistema que combine interfaces y clases abstractas para gestionar un 
transporte público. 
• Crea una clase abstracta Transporte con un método abstracto mover(). 
• Define dos interfaces: 
o Electrico con el método cargarBateria(). 
o Combustible con el método llenarTanque(). 
• Implementa dos clases: 
o AutobusElectrico: Extiende de Transporte e implementa Electrico. 
o Taxi: Extiende de Transporte e implementa Combustible. */

export abstract class Transporte {
    abstract mover():void
}

interface Electrico{
    cargarBateria():void; 

}
interface Combustible{
    llenarTanque():void; 
}

class AutobusElectrico extends Transporte implements Electrico{
    mover(): void {
        console.log("El autobus electrico se esta moviendo");
        
    }

    cargarBateria(): void {
        console.log("Cargando la bateria del autobus electrico...");
        
    }
}

class Taxi extends Transporte implements Combustible{
    mover(): void {
        console.log("El taxi se esta moviendo");
        
    }

    llenarTanque(): void {
        console.log("Llenando el tanque del taxi...");
        
    }
}

const autobus = new AutobusElectrico()
autobus.cargarBateria(); 
autobus.mover(); 

const taxi1 = new Taxi(); 
taxi1.llenarTanque(); 
taxi1.mover(); 