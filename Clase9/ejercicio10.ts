/*Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza 
Crea un sistema de gestión de productos en una tienda de belleza. Define una 
clase Producto con atributos como nombre, precio y categoria. Luego, crea una 
clase Inventario que gestione un conjunto de productos y tenga métodos para 
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para 
manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar, 
etc.*/

export abstract class Producto{
    nombre: string; 
    precio: number; 
    categoria: string 

    constructor(nombre: string, precio: number, categoria: string){
        this.nombre = nombre, 
        this.precio = precio, 
        this.categoria = categoria
    }

    abstract describirProducto():void; 
}

class Cosmetico extends Producto{

    constructor(nombre: string, precio: number, public marca: string){
        super(nombre, precio, "Cosmetico"); 

        }

        describirProducto():void{
            console.log(`El producto ${this.nombre}  de la marca ${this.marca} cuesta ${this.precio} pesos`);
        }
    }

class TratamientoCapilar extends Producto{
    constructor(nombre: string, precio: number, public tonoDeCabello: string){
        super(nombre, precio, "Capilar"); ;
    }

    describirProducto():void{
        console.log(`EL producto ${this.nombre} para el tono de cabello ${this.tonoDeCabello} cuesta ${this.precio}`);
        
    }
}

class Inventario{
    productos: Producto[]

    constructor(){
        this.productos = []
    }
    
    agregarProducto(producto:Producto):void{
        this.productos.push(producto); 
        console.log(`Producto agregado: ${producto.nombre}`);
        
    }

    eliminarProducto(nombre: string):void{
        const index = this.productos.findIndex(p=>p.nombre === nombre); 
        if(index !== -1){
            const eliminado = this.productos.splice(index, 1)[0]; 
            console.log(`Producto eliminado: ${eliminado.nombre}`);
            
        }else{
            console.log(`Producto ${nombre} no encontrado`);
            
        }
    }
    buscarPorCategoria(categoria: string):Producto[]{
           return this.productos.filter(producto=> producto.categoria === categoria)
    }

    mostrarInventario():void{
        console.log("Inventario");
        this.productos.forEach(p=>console.log(p.nombre))
        
    }
}

const inventario = new Inventario(); 

const rubor = new Cosmetico("Rubor", 10000, "Maybelline"); 
const labial = new Cosmetico("Labial", 7000, "Revlon"); 

const shampoo = new TratamientoCapilar("Shampoo", 15000, "Rubios"); 
const banioDeCrema = new TratamientoCapilar("Banio de Crema", 8000, "Castanios"); 

rubor.describirProducto(); 
labial.describirProducto(); 
shampoo.describirProducto();
banioDeCrema.describirProducto();  

inventario.agregarProducto(rubor); 
inventario.agregarProducto(labial); 
inventario.agregarProducto(shampoo); 
inventario.agregarProducto(banioDeCrema); 

inventario.mostrarInventario(); 

console.log(inventario.buscarPorCategoria("Cosmetico"));

inventario.eliminarProducto("Labial"); 
console.log(inventario.buscarPorCategoria("Cosmetico")); 
