import express, {Application, Request, Response, NextFunction} from 'express'
import cors from 'cors'; 

import booksRouter from './routes/books-router'
import {errorMiddleware} from './middlewares/error-middleware'
import {globalMessage} from './middlewares/global-middleware'

const app: Application = express(); 

const PORT = 3000; 

app.use(express.json()); 
app.use(globalMessage); 
app.use(errorMiddleware); 
app.use(cors()); 
app.use('/api/books', booksRouter); 

app.use((req: Request, res: Response)=>{
    res.status(400).json({error: 'Endpoint no encontrado'}); 
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}/api/books`);
    
})