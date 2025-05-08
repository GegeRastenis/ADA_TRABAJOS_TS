/*Ejercicio 4: Promise.race() - Carrera entre Tareas 
Consigna: 
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. 
Usa Promise.race() para que el programa imprima solo la primera tarea que se 
complete. Luego: 
1. Asegúrate de que se imprime qué tarea ganó la carrera. 
2. Controla posibles errores si alguna de las promesas falla.*/

const promesa1 = new Promise((resolve)=>{
    setTimeout(resolve, 200, "Promesa 1 completada")
})

const promesa2 = new Promise((resolve)=>{
    setTimeout(resolve, 500, "Promesa 2 completada")
})

const promesa3 = new Promise((resolve)=>{
    setTimeout(resolve, 100, "Promesa 3 completada")
})

Promise.race([promesa1, promesa2, promesa3])
        .then((resultado)=>{
            console.log("La promesa ganadora es...", resultado);
        })
        .catch((error)=>{
             console.error("Error en alguna de las promesas", error);
        }) 