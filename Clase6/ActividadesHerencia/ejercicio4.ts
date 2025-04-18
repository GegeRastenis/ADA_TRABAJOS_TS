/*Ejercicio 4: Herencia de Métodos y Sobrescritura  
Consigna: Define una clase base Flor con el método describir(), que imprime un 
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
cada una sobrescribiendo el método describir() con un mensaje específico.*/

class Flor{
    describir(): void{
        console.log(`Esta flor tiene muchos colores`);
        
    }
}

class Rosa extends Flor{
    describir(): void {
        console.log(`Esta flor solo es de color rosa`);
        
    }
}

class Girasol extends Flor{
    describir(): void {
        console.log(`Esta flor es de color blanco y amarillo`);
        
    }
}

const flower = new Flor; 
flower.describir()
const blumen = new Rosa; 
blumen.describir(); 
const florcita = new Girasol; 
florcita.describir(); 