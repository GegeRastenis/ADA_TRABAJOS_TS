import { Request, Response } from "express";
import {QuotesModel} from '../models/quotes-models'; 

export const getAllQuotes = (req: Request, res: Response):void=>{
    const quotes = QuotesModel.getAllQuotes(); 
    res.json(quotes)
}

export const getQuotesById = (req: Request, res: Response):void=>{
    const {id} = req.params 
    const quote = QuotesModel.getQuoteById(id); 
    if(!quote){
        res.status(404).json({error: "Frase no encontrada"}); 
        return; 
    }
    res.json(quote); 
}

export const createQuotes = (req: Request, res: Response):void=>{
    const newQuote = QuotesModel.addQuote(req.body); 
    res.status(201).json(newQuote); 
}

export const updateQuotes = (req: Request, res: Response):void=>{
    const {id}= req.params; 
    const updateQuotes = QuotesModel.updateQuote(id, req.body); 
    res.status(201).json(updateQuotes); 
}

export const deleteQuotes = (req: Request, res: Response):void=>{
    const {id}= req.params; 
    const isDeleted = QuotesModel.deleteQuote(id); 
    if(!isDeleted){
        res.status(400).json({Error: "Frase no encontrada para ser eliminada"}); 
        return
    }
    res.status(204).send()
}