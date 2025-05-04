/*Implementa una clase abstracta Empleado con un método abstracto 
calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo, 
que calculen el salario de acuerdo a las horas trabajadas y salario fijo 
respectivamente.*/

export abstract class Empleado{
    abstract calcularSalario():void
}

class EmpleadoPorHora extends Empleado{
    nombre: string;
    horasTrabajadas: number;  
    salarioPorHora: number

    constructor(nombre: string, salarioPorHora: number, horasTrabajadas: number){
        super()
        this.nombre = nombre; 
        this.salarioPorHora = salarioPorHora; 
        this.horasTrabajadas = horasTrabajadas
    }
    calcularSalario(): void {
        const salario = this. horasTrabajadas * this.salarioPorHora
        console.log(`El empleado ${this.nombre} tiene un sueldo que asciende a ${salario} dolares por haber trabajado ${this.horasTrabajadas} horas`);
    }
}

class EmpleadoFijo extends Empleado{
    nombre: string;
    salario: number


    constructor(nombre: string, salario: number){
        super()
        this.nombre = nombre; 
        this.salario = salario; 

        }
    calcularSalario(): void {
        console.log(`El empleado ${this.nombre} tiene un sueldo fijo de ${this.salario} dolares`);
        
    }

}

const empleadoPorHora = new EmpleadoPorHora("Juan Perez", 20, 20); 
empleadoPorHora.calcularSalario(); 
const empleadoFijo = new EmpleadoFijo("Jorge Martinez", 2000); 
empleadoFijo.calcularSalario()
