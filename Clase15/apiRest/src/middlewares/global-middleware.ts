import express, {Request, Response, NextFunction} from 'express'

export const globalMessage = (req: Request, res: Response, next: NextFunction):void=>{
    console.log('Middleware Global: Se recibio una solicitud');
    next(); 
    
}