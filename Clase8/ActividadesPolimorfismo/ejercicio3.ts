/*Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, 
pero protege el saldo para que solo pueda ser modificado dentro de la clase. 
Crea una subclase CuentaAhorros que agregue interés al saldo.*/ 

class CuentaBancaria{
    protected saldo: number; 

    constructor(saldo: number) {
        this.saldo = saldo
    }

    public depositar(monto: number):void{
    if(monto > 0){
        this.saldo += monto; 
        console.log(`Se ha realizado el deposito exitosamente. Su saldo actual es de ${this.saldo} dolares`);
        
        }else{
            console.log("El monto a depositar deber ser mayor a 0");
            
        }
    }

    public retirarDinero(monto: number):void{
        if(monto > 0 && monto <= this.saldo){
            this.saldo -= monto; 
            console.log(`Ha retirado el monto deseado. Su saldo actual es de ${this.saldo} dolares`);
            
        }else{
            console.log("Fondos insuficientes para retirar ese monto");
            
        }
    }

    consultarSaldo():number{
        console.log(`Su saldo actual es de ${this.saldo} dolares`);
        return this.saldo;
    }
}

class CuentaAhorros extends CuentaBancaria{

    agregarInteres(tasa: number):void{
    this.saldo += this.saldo * tasa; 
    console.log(`De acuerdo a los intereses generados su saldo asciende a ${this.saldo} dolares`);
    
    }
}

const cuentaBancaria = new CuentaBancaria(10000); 
cuentaBancaria.consultarSaldo(); 
cuentaBancaria.depositar(2000); 
cuentaBancaria.retirarDinero(3000);

const cuentaAhorros = new CuentaAhorros(10000); 
cuentaAhorros.consultarSaldo(); 
cuentaAhorros.agregarInteres(0.10); 
