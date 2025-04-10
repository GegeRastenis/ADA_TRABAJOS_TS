/*Actividad 5: Usar aserciones dobles 
Crea una variable de tipo any y haz una conversión con aserciones dobles para 
convertirla en un number. Muestra el resultado.*/

export let valor: any = "12345"; 
let conversionNumber = (valor as unknown as number)
console.log(`Valor numerico con asercion doble: ${conversionNumber}`);
