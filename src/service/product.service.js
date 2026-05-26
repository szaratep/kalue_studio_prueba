import ProductModel from "../models/Product.model.js";

// Services: Su responsabilidad es hablarse con la base de datos
const insertProduct = async ( newProduct ) => {
    return await ProductModel.create( newProduct );
}

const dbGetProduct = async () => {
    return await ProductModel.find();
}


export {
    insertProduct,
    dbGetProduct

}