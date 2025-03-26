let anyValue: any = "Hola soy Any"; 
console.log(anyValue); 
anyValue = 42; 
console.log(anyValue);
anyValue = {name: "Typescript"}; 
console.log(anyValue);

let unknowValue: unknown = "Hola soy Unknow"; 
console.log(unknowValue);

function logMessage(message: string): void{
    console.log(message); 
}
console.log("Esto es una funcion void");

function infiniteBucle(): never{
    while (true){
        console.log("Este bucle nunca termina!!!"); 
    }
}
infiniteBucle()