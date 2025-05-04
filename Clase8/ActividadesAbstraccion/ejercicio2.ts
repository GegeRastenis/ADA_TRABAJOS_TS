/*Sistema de Gestión de Cursos 
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase 
abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que 
contenga los estudiantes y el profesor.*/ 

export abstract class Persona{
    nombre: string; 
    edad: number; 
    id: number; 

    constructor(nombre: string, edad: number, id: number) {
        this.nombre = nombre; 
        this.edad = edad; 
        this.id = id
    }

    abstract describir(): void

}

class Estudiante extends Persona{
    constructor(nombre: string, edad: number, id: number){
        super(nombre, edad, id)
    }
    
    describir(): void {
        console.log(`El estudiante ${this.nombre}, de ${this.edad} anios, con ID ${this.id}`)
        
    }
}

class Profesor extends Persona{
    constructor(nombre: string, edad: number, id: number,  public materia: string){
        super(nombre, edad, id)

    }

    describir(): void {
        console.log(`El Profesor: ${this.nombre}, de ${this.edad} anios, es quien dicta la materia ${this.materia}`);
        
    }
}

class Curso{
    estudiantes: Estudiante[] = []
    
    constructor(public nombre: string, public profesor: Profesor){}
    
    agregarEstudiante(estudiante: Estudiante):void{
        this.estudiantes.push(estudiante); 
    }

    listarParticipantes(): void {
        console.log(`Curso: ${this.nombre}`)
        this.profesor.describir()
        console.log("Estudiantes inscriptos: ")
        this.estudiantes.forEach((est, idx)=>
            console.log(`${idx+1}.${est.describir()}`)
        )
      
    }
}

const profesor = new Profesor("Prof. Perez", 45, 3, "Matematicas")
const estudiante1 = new Estudiante("Jose Lopez", 25, 1)
const estudiante2 = new Estudiante("Marcos Alvarez", 24, 2)

const curso = new Curso("Matematicas", profesor)

curso.agregarEstudiante(estudiante1); 
curso.agregarEstudiante(estudiante2); 

curso.listarParticipantes(); 