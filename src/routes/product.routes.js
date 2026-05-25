const {Router} = require ( 'express');

const router = Router();

const { getUsers} = require ('../controllers/product.controller.js');



router.get( '/', getProduct);


module.exports = router;
