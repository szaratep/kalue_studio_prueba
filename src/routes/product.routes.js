import {Router} from 'express';



import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controllers.js';


const router = Router();


router.get( '/', getProduct);
router.post( '/', createProduct );
router.patch( '/', updateProduct );
router.delete( '/', deleteProduct );


export default router;
