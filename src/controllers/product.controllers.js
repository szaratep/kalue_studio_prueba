function getProduct ( req, res ) {
    res.json({
        msg: 'Listar todos los productos'
    });
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};

function createProduct( req, res ) {
    res.json({
        msg: 'Crea un producto'
    });
}

function updateProduct( req, res ) {
    res.json({
        msg: 'Actualiza un producto'
    });
}

function deleteProduct( req, res ) {
    res.json({
        msg: 'Elimina un producto'
    });
}