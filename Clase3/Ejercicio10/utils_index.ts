/*Actividad 10: Consolidación de Módulos 
Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts, 
stringUtils.ts y user.ts.
Asegúrate de que todas las funciones se puedan importar desde utils/index.ts.
En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un 
solo flujo de trabajo, mostrando todos los resultados en la consola*/

export * from '../Ejercicio1/mathUtils'; 
export {capitalize, reverse} from '../Ejercicio2/stringUtils'; 
export {default as createUser} from '../Ejercicio3/user'; 