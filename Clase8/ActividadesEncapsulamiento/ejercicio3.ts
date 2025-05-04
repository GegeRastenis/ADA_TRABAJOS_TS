/*Ejercicio de Playlist 
Diseña una clase Playlist que contenga propiedades privadas para nombre y 
canciones (un array de títulos de canciones). Implementa métodos para agregar 
canciones, eliminar canciones y listar todas las canciones en la playlist. 
Asegúrate de que se imprima un mensaje si se intenta agregar una canción 
vacía o eliminar una canción que no existe.*/

class Playlist{
    private _nombre: string; 
    private _canciones: string[] 

    constructor(nombre: string){
        this._nombre = nombre; 
        this._canciones = []; 
    }

    public get nombre():string{
        return this._nombre; 
    }

    public agregarCancion(cancion: string):void{
         if(!cancion.trim()){
            console.log("Ese parametro no puede ser ingresado");
            
         }else{
            this._canciones.push(cancion); 
            console.log(`La cancion ${cancion} ha sido agregada a la playlist`);
            
            
         }
    }

    public eliminarCancion(cancion: string):void{
           const index = this._canciones.indexOf(cancion); 
           if(index === -1){
            console.log("la cancion no se encuentra en la playlist");
            return    
           }else{
            this._canciones.splice(index, 1); 
            console.log(`La cancion ${cancion} ha sido eliminada de la Playlist`);
            
        }
    }

    listarCanciones():string[]{
        return this._canciones
        
    }
}

const playlist = new Playlist("On the road"); 
playlist.agregarCancion("Best Part"); 
playlist.agregarCancion("Sobrio"); 
playlist.agregarCancion("La Bachata"); 
playlist.agregarCancion(" "); 
playlist.eliminarCancion("Best Part"); 
console.log(`Canciones en mi Playlist ${playlist.nombre}: ${playlist.listarCanciones()}`);
