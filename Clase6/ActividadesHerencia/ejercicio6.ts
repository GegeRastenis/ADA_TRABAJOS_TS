/*Ejercicio 6: Herencia con Métodos Sobrescritos y super 
Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que 
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari 
que sobrescriba el método abrirPuertas() pero llamando al método de la clase 
base con super.*/

class Zoologico{

    abrirPuertas():void{
        console.log("El zoologico se encuentra abierto");
        
    }
}

class ZoologicoSafari extends Zoologico{

    abrirPuertas(): void {
        super.abrirPuertas(); 
        console.log(`El zoologico Safari abrira sus puertas, una hora mas tarde de la apertura del zoologico`);
        
    }
}


const safari1 = new ZoologicoSafari
safari1.abrirPuertas()