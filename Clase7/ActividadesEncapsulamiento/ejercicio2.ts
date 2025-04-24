/*2. Ejercicio de Libro 
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
Implementa métodos para prestar y devolver el libro, asegurando que solo se 
pueda prestar si está disponible y que se pueda devolver solo si ha sido 
prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
válida.*/

class Libro{
    private _titulo: string; 
    private _autor: string; 
    private _anioPublicacion: number; 
    private _disponible: boolean; 

    constructor(titulo: string, autor: string, anioPublicacion: number, disponible: boolean){
        this._titulo= titulo; 
        this._autor= autor; 
        this._anioPublicacion= anioPublicacion; 
        this._disponible= disponible
    }

    public set disponibilidad(value: boolean){
        if(value === true){
            console.log("El libro se encuentra disponible");
            this._disponible = value;  
        }else if(value === false){
            console.log("El libro no se encuentra disponible");
            this._disponible = value
        }
    }

    prestarLibro():void{
        console.log("El libro ha sido prestado");
        
    }

    devolverLibro():void{
        console.log("El libro ha sido devuelto");
        
    }
}

const librito = new Libro("Cien anios de soledad", "Garcia Marquez", 1985, true)
librito.devolverLibro()
librito.prestarLibro()
librito.disponibilidad = false
console.log(librito);
