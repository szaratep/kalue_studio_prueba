import { Schema, model} from 'mongoose'

const ItemSchema = new Schema({
    variantId:{},
    productId: {},
    name: String,
    color: String,
    size: String,
    price: Number,
    amount: Number
},{});

export default ItemSchema;