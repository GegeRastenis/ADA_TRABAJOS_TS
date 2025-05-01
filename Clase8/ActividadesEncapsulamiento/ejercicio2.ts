/*Ejercicio de Empleado 
Crea una clase Empleado que contenga propiedades privadas para nombre, 
salario, y departamento. Implementa métodos para cambiar el salario (que no 
puede ser menor a 0) y obtener la información del empleado. Si se intenta 
establecer un salario negativo, imprime un mensaje indicativo.*/

class Empleado{
    private _nombre: string; 
    private _salario: number; 
    private _departamento: string; 

    constructor(nombre: string, salario: number, departamento: string){
        this._nombre = nombre; 
        this._salario = salario; 
        this._departamento = departamento
    }

    describirEmpleado(): any{
        return `Nombre: ${this._nombre}, trabaja en el Departamento de: ${this._departamento} y su salario es: ${this._salario}`
    }

    public set salario(value: number){
    if(value > 0){
        this._salario = value; 
        console.log(`El salario de ${this._nombre} asciende a ${value}`);
        
        
    }else{
        console.log(`El salario ingresado no puede ser negativo`);
        
    }
  }

}

export const empleado = new Empleado("Juan Perez", 3000, "Departamento de Finanzas")
console.log(empleado);
empleado.describirEmpleado(); 
empleado.salario = 5000; 