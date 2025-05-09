/*Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all() 
Consigna: 
Simula la consulta a tres APIs diferentes que devuelven información sobre 
usuarios, productos y ventas. Cada consulta debe realizarse usando una función 
que retorne una promesa. Usa Promise.all() para esperar a que todas las 
consultas se completen y luego: 
1. Imprime un mensaje con los resultados si todas las consultas fueron 
exitosas. 
2. Si alguna falla, imprime un mensaje de error. 
3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 
segundos). 
Opcional: Modifica el comportamiento para que si alguna consulta falla, se 
devuelva el mensaje: "No se pudo completar la operación: [API que falló]".*/

function consultarApi(nombreApi, tiempoRetraso, fallo = false){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(fallo){
                reject (`No se pudo completar la operacion ${nombreApi}`);
                
            }else{
                resolve (`${nombreApi} - Datos recibidos`)
            }
        }, tiempoRetraso)
    })
}

const consultaUsuarios = consultarApi("Api Usuarios", 2000); 
const consultaProductos = consultarApi("Api Productos", 3000); 
const consultaVentas = consultarApi("Api Productos", 5000, true); 

Promise.all([consultaUsuarios, consultaProductos, consultaVentas])
    .then((resultados)=>{
        console.log("Todas las consultas fueron exitosas");
        resultados.forEach((resultado)=>console.log(resultado))
    })
    .catch((error)=>{
    console.error("Error", error)
})