/*Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
(string), deporte (string), y energia (number). Luego, define una función entrenar 
que acepte el objeto deportista y un número de horas de entrenamiento, 
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
final, muestra el estado del deportista en la consola.*/

let deportista : {name : string, deporte: string, energia: number, entrenar: Function} = {
name: "Luciana Aymar", 
deporte: "Hockey", 
energia: 100, 
entrenar(deportista: object, horas: number): any{
    let energiaRestante : number = this.energia - (horas*5);
    return energiaRestante
  }

}; 

console.log(deportista.entrenar(deportista, 2));
