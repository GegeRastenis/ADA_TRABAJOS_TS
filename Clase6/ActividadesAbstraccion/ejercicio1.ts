/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
para que ambas bebidas oculten su lógica de preparación interna pero 
expongan un comportamiento común.*/

interface Bebida{
    preparar(): void
}

abstract class InfusionBase implements Bebida{

    preparar(): void {
        this.hervirAgua(); 
        this.ingresarIngrediente(); 
        this.servir(); 
        this.adicionarExtras()
    }
    
    private hervirAgua():void{
        console.log("El agua se esta hirviendo");

    }

    private servir():void{
        console.log("Sirviendo la infusion en la taza");
        
    }

    protected abstract ingresarIngrediente():void; 
    protected abstract adicionarExtras():void

}

class Cafe extends InfusionBase{
    protected ingresarIngrediente(): void {
        console.log("Por favor ingrese 2 cdas de cafe");
        
    }

    protected adicionarExtras(): void {
        console.log("Puede incluir leche y azucar a su gusto");
        
    }
}

class Te extends InfusionBase{
    protected ingresarIngrediente(): void {
        console.log("Por favor ingrese su saquito de te y dejelo reposar");
        
    }
    protected adicionarExtras(): void {
        console.log("Puede aniadir leche y azucar como guste");
        
    }
}

const coffee = new Cafe; 
coffee.preparar()

const tea = new Te; 
tea.preparar()