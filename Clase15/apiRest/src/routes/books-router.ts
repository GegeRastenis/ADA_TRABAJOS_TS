import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, searchBooksByAuthor } from "../controllers/books-controller";
import {validateBook} from '../middlewares/validate-middleware'

const router: Router = Router(); 

router.get('/search/author/', searchBooksByAuthor); 
router.get('/', getAllBooks); 
router.get('/:id', getBookById); 
router.post('/', validateBook, createBook); 
router.patch('/:id', updateBook); 
router.delete('/:id', deleteBook); 

export default router; 
