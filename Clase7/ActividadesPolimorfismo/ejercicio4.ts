/*Ejercicio 4: Abstracción con Clases Abstractas 
Implementa una clase abstracta DispositivoElectronico con métodos abstractos 
encender y apagar. Crea dos clases concretas Televisor y Radio, que 
sobrescriban estos métodos.*/

abstract class DispositivoElectronico{
    abstract encender():void; 
    abstract apagar(): void; 

}

class Televisor extends DispositivoElectronico{
    encender(): void {
        console.log("Presione el boton POWER para encender su TV");
        
    }

    apagar(): void {
        console.log("Presione el boton OFF para apagar su TV");
        
    }

}

class Radio extends DispositivoElectronico{
    encender(): void {
        console.log("Gire la perilla de su radio hacia la derecha para su encendido");
        
    }

    apagar(): void {
        console.log("Gire la perilla de su radio hacia la izquierda para apagarla");
        
    }
}

const tele = new Televisor()
tele.encender()
tele.apagar()

const radio1 = new Radio()
radio1.encender()
radio1.apagar()