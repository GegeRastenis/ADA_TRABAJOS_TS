/*Ejercicio 2: Obtener Información de un Pokémon Específico 
Descripción: 
1. Crea un archivo getPokemon.js. 
2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener 
información sobre el Pokémon "Bulbasaur". 
3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la 
consola. 
Pistas: 
• La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1. 
• Los tipos de Pokémon se encuentran en types dentro de la respuesta.*/

async function fetchPokemon(){
    try{
        const pokeName = "Bulbasaur"; 
        if (!pokeName) throw new Error("Pokemon no identificado");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if(!response.ok) throw new Error("El personaje pokemon requirido no fue encontrado"); 

        const pokemon = await response.json(); 

        console.log("Datos del pokemon: ", pokemon);
        
    }catch(error){
        console.error(error.message);
        
    }
}
fetchPokemon()