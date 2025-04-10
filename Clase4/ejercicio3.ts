/*Actividad 3: Crear una función genérica 
Crea una función genérica que tome un parámetro de cualquier tipo y lo 
devuelva. Prueba la función con diferentes tipos de datos.*/

function aProbarDistintosDatos<T>(valor:T):T{
    return valor
}

export let nummer = aProbarDistintosDatos<number>(15)
console.log(`Ejemplo de uso con tipo number: ${nummer}`);

let texto = aProbarDistintosDatos<string>("Buenas Tardes!")
console.log(`Ejemplo de uso con tipo string: ${texto}`);

let booleano = aProbarDistintosDatos<boolean>(true)
console.log(`Ejemplo de uso con tipo boolean: ${booleano}`);

