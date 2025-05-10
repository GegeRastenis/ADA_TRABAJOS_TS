/*4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores 
Diseña una función que simule un proceso de pago que tarda 3 segundos en 
completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y 
lanzar un error. Utiliza try/catch para manejar el error de manera adecuada. 
Esta simulación es relevante para entender cómo gestionar errores en procesos 
financieros o de pago, en los cuales las validaciones son cruciales.*/

function procesoDePago(monto){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(monto < 1000){
                resolve("Su pago ha sido completado")
            }else{
                reject("Su proceso de pago no se ha podido completar, el monto es superior a lo solictado")
             
            }
        },3000)

    })
}

async function resolucionDePago() {
    try{
        console.log("Iniciando proceso de pago... ");

        const resultado = await procesoDePago(2500)
        console.log(resultado);
        
    }catch(error){
        console.error(error);
        
    }
}

resolucionDePago()