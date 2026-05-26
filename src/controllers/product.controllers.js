

import { insertProduct } from "../services/product.service.js"
function getProduct ( req, res ) {
    res.json({
        msg: 'Listar los productos'
    });
}


const createProduct = async ( req, res ) {
    try{
        const inputData = req.body;

        const data = await insertProduct ( inputData);
        
        res.json({
            data: data
    });
} catch (error) {
        console.error( error );   

              res.status(500).json({
            msg: 'No se pudo registrar el producto'
        })
    }
}

function updateProduct ( req, res ) {
    res.json({
        msg: 'Actualiza un producto'
    });
}

function deleteProduct( req, res ) {
    res.json({
        msg: 'Elimina un producto'
    });
}


export {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
