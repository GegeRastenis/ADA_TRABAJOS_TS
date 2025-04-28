/*Herencia y Polimorfismo con Clases Abstractas y Métodos 
Sobrecargados 
Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos 
clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el 
instrumento de manera diferente. Además, agrega una sobrecarga del método 
tocar en la clase base para permitir tocar con o sin acompañamiento.*/ 

abstract class InstrumentoMusical{
   abstract tocar(conAcompaniamiento: boolean):void; 
}

class Guitarra extends InstrumentoMusical{
   
    tocar(conAcompaniamiento: boolean): void {
        if(conAcompaniamiento){
            console.log("Tocando la guitarra con acompaniamiento");
            
        }else{
            console.log("Tocando la guitarra sin acompaniamiento");
            
        }
    }
}

class Piano extends InstrumentoMusical{
    tocar(conAcompaniamiento: boolean): void {
        if(conAcompaniamiento){
            console.log("Tocando el piano con acompaniamiento");
            
        }else{
            console.log("Tocando el piano sin acompaniamiento");
            
        }
    }
}

const guitarra = new Guitarra(); 
guitarra.tocar(true); 
guitarra.tocar(false); 

const piano = new Piano(); 
piano.tocar(true); 
piano.tocar(false); 