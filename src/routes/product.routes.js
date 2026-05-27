import {Router} from 'express';



import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controllers.js';


const router = Router();


router.get( '/', getProduct);
router.post( '/', createProduct );
router.patch( '/:id', updateProduct );
router.delete( '/:id', deleteProduct );


export default router;
