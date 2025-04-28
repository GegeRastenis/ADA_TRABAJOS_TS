/*6. Ejercicio de Supermercado 
Crea una clase Producto que contenga propiedades privadas como nombre, 
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
negativo y que cantidad no sea menor que 0.*/

export class Producto{
    private _nombre: string; 
    private _precio!: number; 
    private _cantidad!: number; 

    constructor(nombre: string, precio: number, cantidad: number){
        this._nombre = nombre; 
        this._precio = precio; 
        this._cantidad = cantidad
    }

    public get mostrarNombre(): string{
        return this._nombre
    }

    public set precio(value: number){
        if(value > 0){
            this._precio = value; 
        }else{
            console.log("El parametro ingresado no es valido");
            
        }
    }

    public set cantidad(value: number){
        if(value > 0){
            this._cantidad = value; 
        }else{
            console.log("El parametro ingresado no puede ser menor que cero");
            
        }
    }
}

const producto1 = new Producto("Camisas", 50, 2); 
console.log(producto1); 
producto1.precio = 25; 
producto1.cantidad = 3; 
console.log(producto1);
producto1.precio = -10; 
producto1.cantidad = -2; 
