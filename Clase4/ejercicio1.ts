/*Actividad 1: Usar For...In para recorrer propiedades de un objeto 
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
bucle for...in para recorrer y mostrar cada propiedad y su valor*/

export const persona = {
    nombre: 'Giselle', 
    edad: 43, 
    ciudad: 'Buenos Aires'
}

for (const propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad as keyof typeof persona]);
    
}