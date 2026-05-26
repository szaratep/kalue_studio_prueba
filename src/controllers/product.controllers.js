import { dbGetProduct, insertProduct } from "../service/product.service.js";



const getProduct = async ( req, res ) => {
    try {
        const inputData = req.body;
        
         const data = await dbGetProduct (inputData);
}
        res.json({
             msg: 'Obtener los productos',
             data: data
    });

} catch (error) {
        console.error( error );   

              res.json({
            msg: 'No se pudo obtener el producto'
        })
    }






const createProduct = async ( req, res ) =>{
    try{
        const inputData = req.body;

        const data = await insertProduct ( inputData);
        
        res.json({
            msg: "crear un producto",
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
