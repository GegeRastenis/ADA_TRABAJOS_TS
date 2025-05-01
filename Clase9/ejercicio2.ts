/*2. Florería: Envío Programado de Pedidos 
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe 
contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
Implementa las siguientes funciones: 
• Añadir un pedido. 
• Programar el envío de un pedido utilizando setTimeout() para simular un 
retraso de 5 segundos. 
• Mostrar todos los pedidos pendientes.*/

interface Pedido{
    nombreCliente: string, 
    cantidadFlores: number, 
    tipoDeFlores: string
}

class GestionPedidos{
    pedidos: Pedido[] = []; 

    aniadirPedido(pedido: Pedido):void{
        this.pedidos.push(pedido); 
        console.log(`Pedido aniadido: ${pedido.nombreCliente}, ${pedido.cantidadFlores}, ${pedido.tipoDeFlores}`);
    }

    programarEnvio(indice: number): void{
        if(indice < 0 || indice >= this.pedidos.length){
            console.log('Indice de pedido invalido');
            return; 
        }

        const pedido = this.pedidos[indice];
        console.log(`Programando pedido para: ${pedido.nombreCliente}`);

        setTimeout(()=>{
            console.log(`Enviando pedido de ${pedido.nombreCliente}, ${pedido.cantidadFlores}, ${pedido.tipoDeFlores}`);
            this.pedidos.splice(indice, 1)
            
        },5000)
        
    }

    mostrarPedidos():void{
        if(this.pedidos.length === 0){
            console.log("No existen pedidos pendientes");
            return
            
        }else{
            console.log("Pedidos pendientes: ");
            this.pedidos.forEach((pedido, index)=>{
                console.log(`${index}: ${pedido.nombreCliente}, ${pedido.cantidadFlores}, ${pedido.tipoDeFlores}`);
                
            })
            
        }
    }
}

const sistemaFlores = new GestionPedidos(); 
sistemaFlores.aniadirPedido({nombreCliente: "Juan", cantidadFlores: 12, tipoDeFlores: "Rosas"}); 
sistemaFlores.aniadirPedido({nombreCliente: "Pedro", cantidadFlores: 24, tipoDeFlores: "Tulipanes"}); 
sistemaFlores.aniadirPedido({nombreCliente: "Luis", cantidadFlores: 6, tipoDeFlores: "Jazmines"})
sistemaFlores.mostrarPedidos(); 
sistemaFlores.programarEnvio(2); 