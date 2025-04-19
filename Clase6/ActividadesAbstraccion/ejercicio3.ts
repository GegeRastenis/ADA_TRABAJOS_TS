/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios 
Crea una interfaz Usuario que tenga las propiedades: 
• nombre (obligatoria). 
• edad (opcional). 
• readonly id (solo lectura). 
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta 
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo 
lectura. */

interface Usuario{
    nombre: string; 
    edad?: number; 
    readonly id: number
}

class UsuarioConcreto implements Usuario{

    nombre: string; 
    edad?: number; 
    readonly id: number; 

    constructor(nombre: string, edad: number, id: number){
        this.nombre = nombre, 
        this.edad = edad, 
        this.id = id
    }
}

const usuario = new UsuarioConcreto("Pedro", 15, 5); 
console.log(`Nuevo usuario: `);
console.log(usuario);



