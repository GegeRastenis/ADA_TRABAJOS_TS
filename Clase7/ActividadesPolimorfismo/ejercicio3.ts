/*Ejercicio 3: Encapsulamiento con Métodos Privados 
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
modificado a través de un método depositar y otro retirar, los cuales deben 
validar que la cantidad no sea negativa. Implementa métodos públicos para 
consultar el saldo*/

class Banco{
    private _saldo: number; 

    constructor(saldo:number){
        this._saldo = saldo
    }


    depositar(monto:number):void{
        if(monto <= 0){
            console.log("Parametro de deposito invalido");
        }else{
            const suma = this._saldo + monto; 
            console.log(`Han ingresado: ${monto} a su cuenta. Su saldo es de: ${suma}`);
            
        }
    }

    retirar(monto:number):void{
        if(monto <=0){
            console.log("Parametro de retiro de dinero invalido");
        }else{
            const retiro = this._saldo - monto; 
            console.log(`Se han retirado: ${monto} de su cuenta. Su saldo actual es de: ${retiro}`);
            
        }
    }
}

const depo1 = new Banco(20)
depo1.depositar(15); 
depo1.retirar(5); 
depo1.depositar(-10); 
depo1.retirar(-2)


