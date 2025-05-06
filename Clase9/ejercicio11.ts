/*Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y 
Polimorfismo 
Crea un sistema de reservas para una peluquería. Define una clase Servicio con 
atributos comunes como nombre, duracion, y precio. Luego, crea clases 
concretas para diferentes servicios como CorteDeCabello y Manicura. 
Implementa una clase Cliente y una clase Reserva que asocie clientes con 
servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio 
y encapsulamiento para gestionar la disponibilidad de horarios.*/

abstract class Servicio{
    nombre: string; 
    duracion: number; 
    precio: number

    constructor(nombre: string, duracion: number, precio: number){
        this.nombre = nombre; 
        this.duracion = duracion; 
        this.precio = precio 
    }
    abstract describirServicio():void
}

class CorteDeCabello extends Servicio{
    constructor(nombre: string, duracion: number, precio: number, public largoPelo: string){
        super("Corte de cabello", duracion, precio)
        this.largoPelo = largoPelo;
    }

    describirServicio(): void {
        console.log(`${this.nombre} tiene una duracion de ${this.duracion} minutos, cuesta ${this.precio} pesos y es para pelos de tipo ${this.largoPelo}`);
        
    }
}

class Manicura extends Servicio{
    constructor(nombre: string, duracion: number, precio: number, public tipoServicio: string){
        super("Manicuria", duracion, precio)
        this.tipoServicio = tipoServicio
    }

    describirServicio(): void {
        console.log(`${this.nombre} tiene una duracion de ${this.duracion} minutos, cuesta ${this.precio} pesos y es del tipo ${this.tipoServicio}`);
        
    }
}

export class Cliente{
    nombre: string; 
    id: number; 

    constructor(nombre: string, id: number){
        this.nombre = nombre; 
        this.id = id 
    }

    infoCliente():void{
        console.log(`Nombre del cliente: ${this.nombre}, identificacion interna: ${this.id}`);
        
    }
}

class Reservas{
    reservaServicios: Servicio[]; 
    turno: string

    constructor(cliente: Cliente, turno: string){
        this.turno = turno; 
        this.reservaServicios = []
    }

    agregarServicio(servicio: Servicio, cliente: Cliente):void{
        this.reservaServicios.push(servicio); 
        console.log(`Servicio ${servicio.nombre} agregado al cliente ${cliente.nombre}`);
        
    }
    
    listarReserva(cliente: Cliente, turno: string):void{
        console.log(`Reserva de cliente ${cliente.nombre} para el turno de las ${turno}`);
        this.reservaServicios.forEach(s => s.describirServicio()); 
    }

}

const cliente1 = new Cliente("Marta Flores", 1); 
const cliente2 = new Cliente("Laura", 2); 
cliente1.infoCliente(); 
cliente2.infoCliente(); 

const corteCabello = new CorteDeCabello("Corte Flequilo", 15, 5000, "Flequillo"); 
const manicura = new Manicura("Manicuria", 50, 30000, "Semi")

const reserva1 = new Reservas(cliente2, "19 Horas"); 
const reserva2= new Reservas(cliente1, "15 Horas")

reserva1.agregarServicio(corteCabello, cliente1); 
reserva1.listarReserva(cliente1, "19 Horas")

reserva2.agregarServicio(manicura, cliente2); 
reserva2.listarReserva(cliente2, "15 Horas")

