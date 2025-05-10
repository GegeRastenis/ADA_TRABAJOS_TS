/*1. Simulación de Tiempo de Respuesta de un Servidor 
Imagina que quieres simular cómo responde un servidor cuando un cliente 
realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta 
variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada 
simulacionServidor que simule este comportamiento utilizando async y await. 
La función deberá: 
• Tener un retardo de tiempo aleatorio. 
• Retornar el mensaje "Servidor listo" una vez que haya transcurrido el 
tiempo. 
Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos 
asíncronos, fundamental cuando trabajamos con peticiones de red en el 
desarrollo web.*/

function simulacionServidor(){
    return new Promise((resolve)=>{
        const esperarAleatoria = Math.floor(Math.random()* 2000) + 1000
        setTimeout(()=>resolve("Servidor Listo"), esperarAleatoria)
    })
}

async function ejecutarServidor() {
    console.log("Iniciando servidor... ");
    
    const resultado = await simulacionServidor()
    console.log(resultado);
    
    console.log("Servidor cerrando");
    
}; 

ejecutarServidor()