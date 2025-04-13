/*Ejercicio 7: Modificadores de Acceso 
1. Define una clase Coche con propiedades marca, modelo (públicas) y 
precio (privada). 
2. Implementa un método para mostrar la información del coche que acceda 
a las propiedades públicas y no a la privada directamente.*/

class Coche{
    public marca: string;
    public modelo: string;
    private precio: number 
    
    constructor(marca: string, modelo: string, precio: number){
        this.marca = marca; 
        this.modelo = modelo; 
        this.precio = precio
    }

    public mostrarInformacion(): void{
        console.log(`Este automovil es un ${this.marca} modelo ${this.modelo} si es de su interes consultenos el precio por privado`);
        
    }
}

const coche1 = new Coche("Renault", "Captur", 25000); 
coche1.mostrarInformacion()