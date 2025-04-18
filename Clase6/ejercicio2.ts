/*Ejercicio 2: Herencia Simple con Acceso 
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y 
materia, y un método enseñar(). Luego, crea una clase derivada 
MaestroMatematicas que extienda de Maestro y sobrescriba el método 
enseñar() para imprimir un mensaje específico de matemáticas.*/

class Maestro{
    protected nombre: string; 
    protected materia: string; 

    constructor(nombre: string, materia: string){
        this.nombre= nombre; 
        this.materia= materia
    }

enseniar():void{
    console.log(`El profesor ${this.nombre} es quien dicta la materia ${this.materia}`);
    
    }
}

class MaestroMatematicas extends Maestro{

    constructor(nombre: string, materia: string){
        super(nombre, materia)
    }

    enseniar(): void {
        console.log(`Las matematicas son la base de la programacion`);
        
    }
}

const profesor1 = new Maestro('Juan', 'Literatura')
profesor1.enseniar()
const profesor2 = new MaestroMatematicas('Pedro', 'Matematicas')
profesor2.enseniar()