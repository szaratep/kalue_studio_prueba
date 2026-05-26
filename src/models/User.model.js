import { Schema, Types, model } from 'mongoose';
import AddressesSchema from './Addresses.model.js';

//Primera parte: definir el schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },
    
    userName: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },

    password:{
        type: String,
        required: true,
        trim: true
    },

    role: {
        type: String,
        roleType: ["admin", "vendedor", "comprador"],
        default: "comprador",
        required: true
    },

    phoneNumber: {
        type: String,
        minLength: 10,
        maxLength: 10,
        trim: true
    },

    addresses: [ AddressesSchema ],

    birthdate: {
        type: Date,
        required: true,
    },

    status: {
        type: Boolean,
        required: true,
        default: false,
    }
},{
    versionKey: false,
    timestamps: true
});

//Segunda parte: definir el modelo
const UserModel = new model('Users', UserSchema);

export default UserModel;
