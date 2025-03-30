/*Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
función debe retornar el área de la figura. Usa tipos específicos para cada caso.*/

type figura = "circulo" | "rectangulo"

function calcularArea(figura: figura, ...parametros: number[]){
    if(figura === "circulo"){
       let [radio] = parametros
       return 3.14 * (radio * radio);
    }else if(figura === "rectangulo"){
       let [largo, ancho] = parametros; 
       return largo * ancho
    }
    
}
    let areaCirculo = calcularArea("circulo", 5); 
    console.log(`El area del circulo es: ${areaCirculo}`);
    
    let areaRectangulo = calcularArea("rectangulo", 7, 8); 
    console.log(`El area del rectangulo es: ${areaRectangulo}`);
    
