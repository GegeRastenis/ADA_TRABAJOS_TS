/*Sistema de Gestión de Compras 
Crea un sistema que gestione productos y órdenes de compra. Usa una clase 
abstracta Producto, clases concretas Electrónico y Alimento, y una clase 
OrdenCompra que contenga múltiples productos.*/

export abstract class Producto{
       nombreProducto: string; 
       precio: number;  
       id: number

       constructor(nombreProducto: string, precio: number, id: number){
        this.nombreProducto = nombreProducto; 
        this.precio = precio; 
        this.id = id
       }
       
       abstract describir():string
}


class Electronico extends Producto{
    constructor(nombreProducto: string, precio: number, id: number){
        super(nombreProducto, precio, id)
    }

    describir(): string {
        return`El producto electronico: ${this.nombreProducto}, con Id: ${this.id} cuesta: ${this.precio}`;
        
    }
}

class Alimento extends Producto{
    constructor(nombreProducto: string, precio: number, id: number){
        super(nombreProducto, precio, id)
    }

    describir(): string {
        return `El producto alimenticio: ${this.nombreProducto}, con Id: ${this.id} cuesta: ${this.precio}`;
        
    }
}

class OrdenCompra{

   productos: Producto[] = []; 
    
    agregarProducto (producto: Producto):void{
        this.productos.push(producto); 
    }

    listarOrdenDeCompra():void{
        console.log(`Resumen de la Orden de Compra: `);
        this.productos.forEach(p=>{
            console.log(p.describir())
        })
    }
}

const cafetera = new Electronico("Cafetera", 150000, 1); 
const aspiradora = new Electronico("Aspiradora", 200000, 2); 
const fideos = new Alimento("Fideos", 1500, 3); 
const arroz = new Alimento("Arroz", 2000, 4); 

const ordenDeCompra = new OrdenCompra(); 
ordenDeCompra.agregarProducto(cafetera); 
ordenDeCompra.agregarProducto(aspiradora); 
ordenDeCompra.agregarProducto(fideos); 
ordenDeCompra.agregarProducto(arroz); 
ordenDeCompra.listarOrdenDeCompra()
