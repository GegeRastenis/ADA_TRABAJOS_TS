import {Router} from 'express'; 
import {
    getAllQuotes, 
    getQuotesById, 
    createQuotes, 
    updateQuotes, 
    deleteQuotes
} from '../controllers/quotes-controllers'; 

import {validateQuote} from '../middlewares/validate-middleware'; 

const router: Router = Router(); 

router.get('/', getAllQuotes); 
router.get('/:id', getQuotesById); 
router.post('/', validateQuote, createQuotes); 
router.patch('/:id', updateQuotes); 
router.delete('/:id', deleteQuotes); 

export default router; 