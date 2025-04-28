/* 5. Ejercicio de Vacaciones 
Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
que duracion no sea menor que 1 y presupuesto sea mayor que 0.*/ 

class Vacacion{
    private _destino: string; 
    private _duracion!: number; 
    private _presupuesto!: number; 

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino; 
        this._duracion = duracion; 
        this._presupuesto = presupuesto
    }

    public get lugarDestino(): string{
        return this._destino
    }

    public set duracion(value:number){
    if(value > 1){
        this._duracion = value
        
    }else{
        console.log("La duracion del viaje debe ser mayor a un dia");
        

      }
   }

   public set presupuesto(value:number){
    if(value > 0){
        this._presupuesto = value; 
    }else{
        console.log("El parametro ingresado no es valido");
        
    }
   }
}

const vacaciones = new Vacacion("Aruba", 10, 5000); 
console.log(vacaciones);
vacaciones.duracion = 15
vacaciones.presupuesto = 10000; 
console.log(vacaciones);
vacaciones.duracion = 0; 
vacaciones.presupuesto = -10; 

