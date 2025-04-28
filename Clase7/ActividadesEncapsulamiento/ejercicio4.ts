/*4. Ejercicio de Aviones 
Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa. 
Nota sobre la inicialización de propiedades 
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
TypeScript que indica que estas propiedades no estaban inicializadas en el 
constructor. Este enfoque asegura que las propiedades serán asignadas 
adecuadamente en el constructor mediante el uso de los setters, manteniendo 
así la validación de los valores. Tener esto en cuenta para los demás ejercicios. */

export class Avion{
    private _modelo: string; 
    private _capacidad!: number; 
    private _velocidad!: number; 

    constructor(modelo: string, capacidad: number, velocidad: number){
        this._modelo = modelo; 
        this._capacidad = capacidad; 
        this._velocidad = velocidad
    }

    public get modelo(): string{
        return this._modelo
    }; 

    public set capacidad(value: number){
        if(value > 0){
            this._capacidad = value; 
        }else{
            console.log("La capacidad del avion no puede ser menor a cero");
            
        }
    }

    public set velocidad(value:number){
        if(value > 0){
            this._velocidad = value
        }else{
            console.log("La velocidad del avion no puede ser negativa");
            
        }
    }
}

const avioncito = new Avion("Boeing 747", 2000, 20000); 
console.log(avioncito);
avioncito.capacidad = 3000; 
avioncito.velocidad = 50000; 
console.log(avioncito);
avioncito.capacidad = 0; 
avioncito.velocidad = -10; 

