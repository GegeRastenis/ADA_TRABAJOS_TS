/*Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida 
Consigna: 
Crea una secuencia de promesas que simulen el flujo de un usuario que se 
registra en una plataforma y luego recibe un mensaje de bienvenida. La 
secuencia debe ser: 
1. Registrar Usuario (promesa que tarda 2 segundos). 
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo). 
3. Mostrar Mensaje Final al completar ambas tareas. 
Si alguna de las promesas falla, debe imprimirse un mensaje de error.*/

function registrarUsuario(nombreUsuario){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const exito = Math.random() > 0.2
        if(exito){
            console.log(`Usuario: ${nombreUsuario} registrado exitosamente`);
            resolve(nombreUsuario)
        }else{
            reject("Error al registrar al usuario")
        }
        
        },2000)
    })
}

function enviarMailDeBienvenida(nombreUsuario){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const exito= Math.random() > 0.2
        if (exito){
            console.log(`Mail de bienvenida enviado a ${nombreUsuario}`);
            resolve(nombreUsuario)
        }else{
            reject("Error al enviar mail de bienvenida al usuario")
           
        }
    }, 1000)
   })
}

registrarUsuario("Juan Perez")
    .then((nombreUsuario)=>{
        return enviarMailDeBienvenida(nombreUsuario)

    })
    .then(()=>{
        console.log("Proceso completado exitosamente");
    
    })
    .catch((error)=>{
        console.log(error);
          
    })