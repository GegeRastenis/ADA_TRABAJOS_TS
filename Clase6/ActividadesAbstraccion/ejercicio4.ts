/*Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
Crea una interfaz PagoOnline con un método procesarPago(). 
Crea una clase abstracta Pago con un método concreto validarMonto() y un 
método abstracto completarPago(). 
Implementa ambas estructuras en una clase concreta PagoConTarjeta.*/

interface PagoOnline{
    procesarPago(): void
}

abstract class Pago { 
    monto: number; 

    constructor(monto: number){
        this.monto = monto
    }

    validarMonto():void{
        console.log(`Por favor valide su monto: ${this.monto}`);
        
    }

    abstract completarPago():void
}


class PagoConTarjeta extends Pago implements PagoOnline{
    procesarPago(): void {
        console.log("Su pago esta siendo procesado");
    }
    validarMonto(): void {
        console.log(`Confirme el pago efectuado: ${this.monto}`);
        
    }
    completarPago(): void {
        console.log("Gracias por su compra");
        
    }
} 

const nuevaCompra = new PagoConTarjeta(15000)
nuevaCompra.procesarPago(); 
nuevaCompra.validarMonto(); 
nuevaCompra.completarPago()



