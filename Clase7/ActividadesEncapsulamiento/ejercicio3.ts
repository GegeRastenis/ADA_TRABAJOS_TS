/*3. Ejercicio de Estudiante 
Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
edad, y calificaciones. Implementa métodos para agregar calificaciones y 
calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
calcular el promedio.*/

class Estudiante{
    private _nombre:string; 
    private _edad: number; 
    private _calificaciones: number [] = []; 

    constructor(nombre: string, edad: number){
        this._nombre = nombre; 
        this._edad = edad; 
    }


    public set qualifications(value: number){
        if(value >=0 && value <=100){
            this._calificaciones.push(value)
        }else{
            console.log("Se esta intentando agregar una calificacion invalida")
        }
    }

    agregarCalificaciones():void{}


    public calcularPromedio():number | void{
        if(this._calificaciones.length === 0){
            console.log("No existen calificaciones para calcular un promedio");
            return
        }else{
        const suma = this._calificaciones.reduce((total, nota)=>total + nota, 0); 
        const promedio = suma / this._calificaciones.length; 
        return promedio; 
        }
        
    }
}

const estudiante1 = new Estudiante("juan", 23)
estudiante1.qualifications = 60
estudiante1.qualifications = 80
let promedioEstudiante = estudiante1.calcularPromedio()
console.log(promedioEstudiante);
//estudiante1.qualifications = 105; 
//console.log(estudiante1);


