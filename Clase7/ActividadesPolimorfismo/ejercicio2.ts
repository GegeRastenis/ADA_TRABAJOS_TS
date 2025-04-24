/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución) 
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
proporcionar una implementación específica de cómo arrancar. */

export class Vehiculo{
    arrancar():void{}
}

class Coche extends Vehiculo{
    arrancar():void{
    console.log("Debe introducir la llave y tener el auto en punto muerto para que arranque");
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log("La moto debe de arrancarse una vez que el conductor este bien ubicado y haya destrabado el volante");
        
    }
}

const arranqueCoche = new Coche
arranqueCoche.arrancar()


const arranqueMoto = new Moto
arranqueMoto.arrancar()

