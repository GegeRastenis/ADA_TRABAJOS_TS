import { Request, Response } from "express";
import { BooksModel } from "../models/books-model";

export const getAllBooks = (req: Request, res: Response):void =>{
    const books = BooksModel.getAllBooks(); 
    res.json(books)
}

export const getBookById = (req: Request, res: Response):void =>{
    let {id} = req.params; 
    const book = BooksModel.getBookById(parseInt(id)); 

    if(!book){
        res.status(404).json({error: 'Libro no encontrado get book by Id'}); 
        return
    }
    res.status(200).json(book); 

}

export const createBook = (req: Request, res:Response):void=>{
    const newBook = BooksModel.addBook(req.body); 
    res.status(201).json(newBook); 
}

export const updateBook = (req: Request, res: Response):void =>{
    const {id} = req.params; 
    
    const updatedBook = BooksModel.updateBook(parseInt(id), req.body); 
    if(!updatedBook){
        res.status(404).json({error: 'Id de libro no encontrado para hacer update'}); 
        return
    }
    res.status(201).json(updatedBook)
}

export const deleteBook = (req: Request, res: Response):void =>{
    const {id} = req.params; 

    const deletedBook = BooksModel.deleteBook(parseInt(id)); 
    console.log('Deleted Book: ', deleteBook);
    
    if(!deletedBook === null){
        res.status(404).json({error: 'Libro no encotrado para eliminar'}); 
        return; 
    }
    res.status(203).send(deletedBook) 
}

export const searchBooksByAuthor = (req: Request, res: Response):void=>{
    const {author} = req.query;  

    if(!author){
        console.log('No se proporciono un autor');
        res.status(400).json({error: 'Debe de proporcionarse un autor para la busqueda'})
        return; 
        
    }
    const books = BooksModel.searchBooksByAuthor(author as string); 

    if(books.length === 0){
        res.status(404).json({error: 'Libro de ese autor no encontrado'})
        return; 
    }
    res.status(200).json(books)
}