/*Ejercicio de Bodega 
Diseña una clase Bodega que tenga propiedades privadas para nombre, 
direccion, y inventario (un array de objetos con producto y cantidad). 
Implementa métodos para agregar productos al inventario, eliminar productos, 
y listar el inventario. Si se intenta agregar un producto con una cantidad 
negativa, imprime un mensaje informativo.*/

class Bodega {
    private _nombre: string; 
    private _direccion: string; 
    private _inventario: {producto: string; cantidad: number}[]

    constructor(nombre: string, direccion: string){
        this._nombre = nombre; 
        this._direccion = direccion; 
        this._inventario = []
    }

    public get nombre():string{
        return this._nombre
    }

    public agregarProductos(producto: string, cantidad: number):void{
        if(cantidad < 0){
            console.log("La cantidad ingresada no puede ser negativa");
            
        }else{
            this._inventario.push({producto, cantidad}); 
            console.log(`Producto agregado: ${producto}, con cantidad: ${cantidad}`);
            
        }
    }

    public eliminarProductos(producto:string):void{
        const index = this._inventario.findIndex(item => item.producto === producto); 
    if (index === -1){
        console.log(`El producto ${producto} no esta en el inventario`);
        
    }else{
        this._inventario.splice(index, 1); 
        console.log(`El producto ${producto} fue eliminado del inventario`);
        
       }
    }

    public listarInventario():{producto: string; cantidad: number}[]{

        return this._inventario

    }
}

const bodega = new Bodega("Bodega Central", "Avenida Alvarez Thomas 1520"); 
bodega.agregarProductos("Vinos Tintos", 100); 
bodega.agregarProductos("Vinos Blancos", 150); 
bodega.agregarProductos("Espirituosas", 200); 
console.log(`Inventario de ${bodega.nombre}:`, bodega.listarInventario());
bodega.eliminarProductos("Vinos Blancos"); 
console.log(`Inventario de ${bodega.nombre}:`, bodega.listarInventario());