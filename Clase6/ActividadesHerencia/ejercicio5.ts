/*Ejercicio 5: Herencia con Modificadores de Acceso 
Consigna: Crea una clase base Compania con un atributo privado 
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase 
derivada EmpresaTecnologia que use el atributo protegido y agregue un 
método que calcule el doble de los ingresos anuales.*/

class Compania{
    private nombreCompania: string; 
    protected ingresosAnuales: number; 

    constructor(nombreCompania: string, ingresosAnuales: number){
        this.nombreCompania = nombreCompania; 
        this.ingresosAnuales = ingresosAnuales
    }
}

class EmpresaTecnologia extends Compania{
    
    constructor(nombreCompania: string, ingresosAnuales: number){
    super(nombreCompania, ingresosAnuales)
    }
    
    ingresosDobles():void {
        const duplicarIngreso = this.ingresosAnuales * 2
console.log(`Los ingresos de esta empresa se duplican al terminar el anio fiscal: ${duplicarIngreso}`);

    }     
    
}

const compania1 = new Compania("Man Diesel", 2000); 
const compania2 = new EmpresaTecnologia("Globant", 2000)
compania2.ingresosDobles()