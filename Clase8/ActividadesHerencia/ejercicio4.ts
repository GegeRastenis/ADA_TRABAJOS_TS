/*Crea una clase base Empleado con propiedades protegidas nombre y 
salario, y un método calcularSalario(). Crea dos clases derivadas 
EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben 
sobrescribir el método calcularSalario() con sus propias lógicas (empleados de 
tiempo completo tienen un salario fijo, mientras que los empleados de medio 
tiempo cobran por hora). 
Además, crea una interfaz BeneficiosLaborales que tenga el método 
calcularBeneficios(). Solo los empleados de tiempo completo implementarán 
esta interfaz.*/

interface BeneficiosLaborales{
    calcularBeneficios():void
}

class Empleado{
    protected nombre: string; 
    protected salario: number; 

    constructor(nombre: string, salario: number){
        this.nombre = nombre; 
        this.salario = salario
    }

    calcularSalario():number{
        return this.salario
    }
}

class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales{
    constructor(nombre: string, salario: number){
        super(nombre, salario)
    }

    obtenerNombre(): string{
        return this.nombre
    }

    calcularSalario():number{
        return this.salario
        
    }

    calcularBeneficios(): number {
        return this.salario + (this.salario*0.30)
    }
}

class EmpleadoMedioTiempo extends Empleado{

    private horasTrabajadas: number;

    constructor(nombre: string, salario: number, horasTrabajadas: number){
        super(nombre, salario)
        this.horasTrabajadas = horasTrabajadas; 
    }

    obtenerNombre(): string{
        return this.nombre
    }

    calcularSalario(): number{
       return this.salario * this.horasTrabajadas; 
    }

    obtenerHorasTrabajadas(): number{
        return this.horasTrabajadas
    }
}

const empleadoFullTime = new EmpleadoTiempoCompleto("Juan Perez", 2000);
console.log(`El empleado ${empleadoFullTime.obtenerNombre()} tiene un sueldo fijo de ${empleadoFullTime.calcularSalario()} dolares con beneficios que ascienden a un total de ${empleadoFullTime.calcularBeneficios()} dolares`);

const empleadoHalfTime = new EmpleadoMedioTiempo("Marcos Juarez", 20, 20); 
console.log(`El empleado ${empleadoHalfTime.obtenerNombre()} tiene un sueldo de ${empleadoHalfTime.calcularSalario()} dolares por haber trabajado un total de ${empleadoHalfTime.obtenerHorasTrabajadas()} horas`);
