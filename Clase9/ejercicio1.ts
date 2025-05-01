/*1. Mueblería: Actualización de Precios 
En una mueblería, se requiere un sistema que permita actualizar los precios de 
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y 
un identificador único. Implementa las siguientes funciones: 
• Añadir un nuevo mueble. 
• Actualizar el precio de un mueble después de 3 segundos utilizando 
setTimeout(). 
• Mostrar el inventario de muebles*/


class Mueble{
    nombre: string; 
    precio: number; 
    id: number; 

    constructor(nombre: string, precio: number, id: number) {
        this.nombre = nombre; 
        this.precio = precio; 
        this.id = id
       }
        
    cambiarPrecio(value:number):void {
        if(value > 0){
            setTimeout(()=>{
                this.precio = value; 
                console.log(`El precio de ${this.nombre} ha cambiado a ${value}`);
                
            }, 3000)
        }else{
            console.log("El precio ingresado es invalido");
            
        }
    }

    }

class Inventario{
    stock: Mueble[] = []; 
    
    public agregarMueble(mueble: Mueble): void{
            this.stock.push(mueble)
    }

    public mostrarInventario(): void {
        console.log("Inventario de muebles:");
        this.stock.forEach(m => {
            console.log(`ID: ${m.id}, Nombre: ${m.nombre}, Precio: ${m.precio}`);
        });
    }
}

const mueblería = new Inventario(); 
const sillon = new Mueble("sillon", 50000, 1); 
const mesaRatona = new Mueble("Mesa Ratona", 20000, 2); 
mueblería.agregarMueble(sillon); 
mueblería.agregarMueble(mesaRatona); 
mueblería.mostrarInventario(); 
//sillon.cambiarPrecio(100000); 
sillon.cambiarPrecio(-10); 

