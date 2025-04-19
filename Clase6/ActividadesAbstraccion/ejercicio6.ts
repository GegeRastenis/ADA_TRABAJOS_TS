/*Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
Crea un sistema de inventario que gestione diferentes tipos de productos. 
Define una clase abstracta Producto con: 
• Propiedades protegidas: nombre, precio. 
• Un método abstracto calcularDescuento(). 
Implementa dos subclases: Ropa y Electronica. 
• La subclase Ropa aplicará un 10% de descuento. 
• La subclase Electronica tendrá un 5% de descuento. 
Añade un método concreto en la clase abstracta para mostrar la información del 
producto.*/

abstract class Producto{
    
    protected name: string; 
    protected price: number

    constructor(name: string, price: number) {

        this.name = name; 
        this.price = price
        
    }

    abstract calcularDescuento(): void; 

    describirProducto():void{

        console.log(`Este producto ${this.name} cuesta: ${this.price}`);
    }
}

class Ropa extends Producto{

    constructor(){
        super("Campera", 1500)
    }

    describirProducto(): void {
        console.log(`Este producto ${this.name} cuesta: ${this.price}`);
        
    }

    calcularDescuento(): void {
        let descuento = this.price * 0.10; 
        console.log(`Su descuento en esta prenda es de: ${descuento}`);
        
    }
}

class Electronica extends Producto{

    constructor(){
        super("Computadora Personal", 5000)
    }

    describirProducto(): void {
        console.log(`Este producto ${this.name} cuesta: ${this.price}`);
        
    }

    calcularDescuento(): void {
        let descuento = this.price * 0.05; 
        console.log(`Su descuento en este producto es de: ${descuento}`);
        
    }
}





const ropita = new Ropa(); 
ropita.describirProducto(); 
ropita.calcularDescuento(); 

const pc = new Electronica(); 
pc.describirProducto(); 
pc.calcularDescuento()