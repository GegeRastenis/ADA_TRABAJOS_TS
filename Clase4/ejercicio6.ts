/*Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y 
Aserciones 
Crea una función genérica llamada filtrarElementos que reciba un arreglo de 
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of, 
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de 
tipo para acceder a las propiedades específicas de string.*/

function filtrarElementos(array: (number | string | boolean)[]):string[]{
  const resultado: string[] = []; 
  
  for (let elemento of array){
    if (typeof elemento === 'string'){
       let texto = elemento as string; 
       console.log(`Longitud del texto: ${texto.length} `);
       resultado.push(texto)
    }
  }
  return resultado
} 

const valores = [54, 'argentino', 28, 'oso', true]; 
const soloStrings = filtrarElementos(valores); 

console.log(soloStrings);
