import { Schema, model} from 'mongoose'

const itemSchema = new Schema({
    variantId:{},
    productId: {},
    name: String,
    color: String,
    size: String,
    price: Number,
    amount: Number
},{});

const itemModel = new model('Items', itemSchema);

export default itemModel;