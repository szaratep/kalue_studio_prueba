import { Schema, model} from 'mongoose'

const itemsSchema = new Schema({
    variantId:{},
    productId: {},
    name: String,
    color: String,
    size: String,
    price: Number,
    amount: Number
},{});

const orderSchema = new Schema({
    userId: {

    },

    status: {
        type: String,
        statusVariable: ["pendiente", "pagado", "en preparacion", "enviado", "entregado", "cancelado"],
        default: "pendiente"
    },

    items: [],

    mailingAddress: {

    },

    subTotal: Number,

    discount: Number,

    shippingCost: Number,

    total: Number,

    paymentMethod: {
        type: String,
        paymentMethodVarible: ["tarjeta", "pse", "contraentrega", "efectivo"],
        default: "efectivo"
    },

    paymentStatus: {
        type: String,
        paymentStatusVariable: ["pendiente", "aprobado", "rechazado"],
        default: "pendiente" 
    },

    paymentReference: String,

    notes: {
        type: String,
        maxLength: 200
    }
}, {
    versionKey: false,
    timestamps: true
});

const orderModel = new model('Orders', orderSchema);

export default orderModel;