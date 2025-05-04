/*Crea un sistema para gestionar las reservas de un hotel. Define una 
clase base Cliente con propiedades privadas como nombre, numeroHabitacion, 
y un método reservar(). Luego, crea dos clases derivadas ClientePremium y 
ClienteCorporativo que sobrescriban el método reservar() para añadir 
funcionalidades adicionales. 
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios(). 
Ambas clases derivadas deben implementar esta interfaz. En la clase 
ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase 
ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.*/

interface Beneficios{
    accederBeneficios():void
}

class Cliente{
    private _nombre: string; 
    private _roomNumber: number; 

    constructor(nombre: string, roomNumber: number){
        this._nombre = nombre; 
        this._roomNumber = roomNumber
    }

    reservar():void{
        console.log(`El Sr. ${this._nombre} ha reservado la habitacion ${this._roomNumber}`);
        
    }

}

    class ClientePremium extends Cliente implements Beneficios{
        constructor(nombre: string, roomNumber: number){
            super(nombre, roomNumber); 
        }

        reservar(): void {
            super.reservar(); 
            console.log("Su status de reserva es: Cliente Premium");
        }

        accederBeneficios(): void {
            console.log("Como Cliente Premium ud. podra acceder al Spa y desayuno de cortesia");
            
        }
    }

    class ClienteCorporativo extends Cliente implements Beneficios{
        constructor(nombre: string, roomNumber: number){
            super(nombre, roomNumber)
        }

        reservar(): void {
            super.reservar()
            console.log("Su status de reserva es: Cliente Corporativo");
        }

        accederBeneficios(): void {
            console.log("Como Cliente Corporativo ud. podra acceder a la sala de reuniones y descuentos");  
        }
    }

    const clientePremium1 = new ClientePremium("Juan Perez", 505); 
    const clienteCorporativo1 = new ClienteCorporativo("Pedro Perez", 202); 

    clientePremium1.reservar(); 
    clientePremium1.accederBeneficios(); 

    clienteCorporativo1.reservar(); 
    clienteCorporativo1.accederBeneficios()