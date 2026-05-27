import ProductModel from "../models/Product.model.js";
import { dbDeleteProduct, dbGetProduct, insertProduct } from "../service/product.service.js";



const getProduct = async ( req, res ) => {

   try {
            const data =await dbGetProduct();

            res.json({
                msg: 'Obtener los productos',
                data: data
    });
    
   } catch (error) {
    console.error(error)

    res.status(500).json ({
        msg:'no se pudo obtener el listado de productos'
    })
    
   }
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

const deleteProduct = async( req, res ) => {
    try {
         const id = req.params.id;

    const data = await dbDeleteProduct(id);

      res.json({
        msg: 'Elimina un producto',
        data: data
    });

    } catch (error) {
        console.error( error );   

              res.status(500).json({
            msg: 'No se pudo eliminar el producto'
    }  
)
}
}
   

  


export {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
