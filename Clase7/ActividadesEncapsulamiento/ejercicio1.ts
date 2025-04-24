/*1. Ejercicio de Coche 
Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
métodos para encender el coche y realizar un viaje, que incrementen el 
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
establecer un año o kilometraje no válido, imprime un mensaje indicando el 
error.*/

export class Coche{
    private _marca: string; 
    private _modelo: string; 
    private _anio: number; 
    private _kilometraje: number; 

    constructor(marca:string, modelo: string, anio: number, kilometraje: number){
        this._marca = marca; 
        this._modelo= modelo; 
        this._anio= anio; 
        this._kilometraje= kilometraje
    }

    public set anio(value: number){
        if(value > 1886){
           this._anio = value
        }else{
            console.log(`Este anio no es valido`);
            
        }
    }

    public set kilometros(value: number){
        if(value > 0){
            this._kilometraje= value
        }else{
            console.log(`Este kilometraje es incorrecto`);
            
        }
    }

    encender():void{
        console.log(`Vehiculo encendido`);
        
    }

    realizarViaje():void{
        console.log(`Ya en viaje`);
        
    }
}

const car = new Coche("Volkswagen", "Bora", 2024, 50000)
//car.anio= 2023; 
//car.kilometros= 60000; 
car.realizarViaje(); 
car.encender()
console.log(car);
car.anio= 1800; 
car.kilometros= -10
