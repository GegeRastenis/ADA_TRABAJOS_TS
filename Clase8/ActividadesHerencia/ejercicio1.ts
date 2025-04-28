/*Herencia Múltiple Indirecta y Modificadores de Acceso  
Consigna: Define una clase base Negocio con un método protegido operar(). 
Define otra clase Consultoria que herede de Negocio y sobrescriba el método 
operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría. */

class Negocio {
    protected operar():void{
        console.log("El negocio esta operando de forma integral");
        
    }

    public iniciarOperacion():void{
        this.operar()
    }
}

class Consultoria extends Negocio{
    protected operar(): void {
        console.log("El negocio de consultoria esta operando de forma ascendente");
        
    }

    public iniciarOperacion(): void {
        this.operar()
    }
}

const consultoria1 = new Consultoria();
consultoria1.iniciarOperacion(); 