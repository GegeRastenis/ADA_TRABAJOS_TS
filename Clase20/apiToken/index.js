
/*Actividad 1: Testear una API con Postman 
Objetivo: Aprender a usar Postman para enviar peticiones a una API 
Consigna: 
1. Crear un endpoint GET /saludo que devuelva un mensaje: "¡Hola, 
bienvenid@ a la API!". 
2. Levantar el servidor Express. 
3. Usar Postman para: 
o Enviar un GET a http://localhost:3000/saludo 
o Observar el resultado 
o Cambiar el método a POST y ver qué error devuelve 
Guía: 
• Mostrar cómo se selecciona el método HTTP en Postman. 
• Señalar dónde se ve la respuesta. 
• Observar los status (200, 404, etc).*/

/*Actividad 2: Validar datos con Zod 
Objetivo: Validar entradas usando zod en un POST. 
Consigna: 
1. Crear un endpoint POST /usuarios. 
2. Usar zod para validar que el body tenga: 
o nombre: string, al menos 3 letras. 
o edad: número entero positivo. 
3. Enviar datos correctos e incorrectos desde Postman y ver cómo 
responde la API.*/

//Importaciones
const express = require ('express');
const cors = require ('cors');
const jwt = require('jsonwebtoken');
const {z} = require('zod');
require('dotenv').config();

//Instancias
const app = express();
app.use(cors()); 
app.use(express.json()); 

//Puerto
const PORT = 3000;

//Middlewares para registrar solicitudes
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
    
})

//Datos simulados
const usuarios = [
    {name: 'Giselle', age: '43'}
]; 

app.get('/message', (req , res) =>{
    res.send("¡Hola, bienvenid@ a la API!")
})

//Esquema ZOD
const userSchema = z.object({
    name: z.string().min(3), 
    age: z.number().positive(),

})

app.get('/usuarios', (req, res)=>{
    res.json(usuarios)
})

app.post('/usuarios', (req, res)=>{
    try{
        const {name, age} = req.body; 
        const newUser = userSchema.parse(req.body)
        usuarios.push(newUser); 
        res.status(201).json('Nuevo usuario creado', newUser)
    }catch(err){
        res.status(400).json({error: 'Credencial invalida'})
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
