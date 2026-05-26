const {Router} = require ( 'express');

const router = Router();

const { getProduct} = require ('../controllers/product.controller.js');

const { getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/Product.controller.js');



router.get( '/', getProduct);
router.post( '/', createProduct );
router.patch( '/', updateProduct );
router.delete( '/', deleteProduct );

module.exports = router;

export default router;
