/*Ejercicio 5: Uso de Interfaces para Polimorfismo 
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz 
en clases Programador y Disenador, donde cada clase debe implementar el 
método con su propia lógica. Luego, crea una función que reciba un objeto de 
tipo Empleado y llame a su método trabajar.*/

interface Empleado{
    trabajar():void; 
}

class Programador implements Empleado{

    trabajar(): void {
        console.log("El programador trabaja en el desarrollo del nuevo programa");
        
    }
}

class Disenador implements Empleado{
    trabajar(): void {
        console.log("El disenador se encarga del disenio del nuevo programa");
        
    }
}

function procesarEmpleo(empleado: Empleado):void{
    empleado.trabajar(); 
}

const programador: Empleado = new Programador(); 
const diseniador: Empleado = new Disenador(); 

procesarEmpleo(programador); 
procesarEmpleo(diseniador); 