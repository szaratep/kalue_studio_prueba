import { Schema, Types, model } from 'mongoose';

//Primera parte: definir el schema
const addressesSchema = new Schema({
    alias: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    zipCode: {
        type: String
    },

    country: {
        type: String,
        default: 'Colombia'
    },

    isDefault: {
        type: Boolean,
        default: false
    }
    

}, {_id: false});


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

    addresses: [addressesSchema],

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
