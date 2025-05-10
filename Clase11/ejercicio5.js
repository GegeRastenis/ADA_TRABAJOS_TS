/*5. Actualización Concurrente de Datos de Usuario y Pedidos 
En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos 
suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos 
funciones asíncronas, una que actualice los datos del usuario y otra que 
actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa 
Promise.all para ejecutar ambas funciones en paralelo y luego muestra un 
mensaje cuando ambas actualizaciones se hayan completado.*/

function actualizacionDatosUsuario(){
    return new Promise(resolve =>
        setTimeout(()=>
        resolve("Datos de usuario actualizados"), 1500))
}

function actualizacionDePedidos(){
    return new Promise(resolve=>
        setTimeout(()=>
        resolve("Pedidos actualizados"), 1500))
}

async function actualizacionesECommerce() {
    try{
        const actualizacion1 = actualizacionDatosUsuario(); 
        const actualizacion2 = actualizacionDePedidos(); 

        const resultado = await Promise.all([actualizacion1, actualizacion2])
        console.log("Resultados: ", resultado);
        
    }catch(error){
        console.error("Una de las actualizaciones no pudo completarse", error);
        
    }
}

actualizacionesECommerce(); 