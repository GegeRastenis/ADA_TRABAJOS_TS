/*Para API REST 
Crear una API básica 
Crea una API REST con un endpoint /books que devuelva una lista de 
libros en formato JSON. 
Método: GET. 
CRUD simple 
Ampliar el ejercicio anterior agregando endpoints para: 
▪ Crear un libro (POST /books). 
▪ Actualizar un libro existente (PUT /books/:id). 
▪ Eliminar un libro (DELETE /books/:id). 
Los datos pueden guardarse en un archivo database. 
Filtrado 
Agregar un endpoint /books?author=nombre para devolver solo los libros 
de un autor específico. 
Método: GET. 
Detalles de un recurso 
Crear un endpoint /books/:id que devuelva la información de un libro por 
su id. 
Si el libro no existe, devuelve un mensaje de error adecuado (404). 
Status codes y mensajes claros 
Revisar la API para que devuelva los códigos de estado HTTP 
correspondientes para cada caso, como 200, 201, 404, y 400.*/

import fs from 'fs';
import path from 'path'; 

const bookFilePath = path.join(__dirname, '../database/books.json'); 

interface Book{
    id: number, 
    title: string, 
    author: string
}

export class BooksModel{

    static readDatabase():any{
        try{
            const data = fs.readFileSync(bookFilePath, 'utf-8'); 
            return JSON.parse(data); 
        }catch(error){
            console.error("Error reading database file: ", error);
            return null; 
        }
    }

    static writeDatabase(data:any):void{
        try{
            const jsonData = JSON.stringify(data, null, 2)
            fs.writeFileSync(bookFilePath, jsonData, 'utf-8'); 
            console.log("Database successfully written");
            
        }catch(error){
            console.error("Error writing database file", error);
            
        }
    }

    static getAllBooks():Book[]{
        const data = this.readDatabase()
        if(data && Array.isArray(data)){
        return data; 
    }else {
        console.error("No valid array found in the database");
        return []
        
          }

    }

    static getBookById(id:number):Book | undefined{
            const books = this.getAllBooks(); 
            return books.find((book)=> book.id === id)
    }

    static addBook(newBook: Book): Book{
        const books = this.getAllBooks(); 
        let newId = 0; 
        if(books.length > 0){
            const lastBookId = books[books.length-1].id; 
            newId = (lastBookId + 1)
        }else{
            newId = books.length + 1 
        }

        const book = {...newBook, id: newId}; 
        books.push(book); 
        this.writeDatabase(books); 
        return book; 
    }       

    static updateBook(id: number, updateData: Partial<Book>):Book | null{
        const books = this.getAllBooks(); 
        const index = books.findIndex((book: Book)=> book.id === id); 

        if(index === -1) return null; 
        
        books [index] = {... books[index], ...updateData}; 
        this.writeDatabase(books); 
        return books[index] 
        
    }

    static deleteBook(id:number):Book | null{
        const books = this.getAllBooks(); 
         const index = books.findIndex((book) => book.id === id);

        if (index === -1) return null;

        const bookDeleted = books [index]; 
        console.log(bookDeleted);
        
        books.splice(index, 1); 
        this.writeDatabase(books); 
        return bookDeleted
    }

    static searchBooksByAuthor(author: string):Book[]{
        const books = this.getAllBooks(); 
        return books.filter((book)=>book.author.toLowerCase().includes(author.toLowerCase()))
    }

}