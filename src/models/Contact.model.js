import {Schema, model } from 'mongoose';

const ContactSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },

    phoneNumber: {
        type: String,
        minLength: 10,
        maxLength: 10,
        trim: true
    },

    address:{
        type: String,
        required: true,
        trim: true 
    },
    
    alias: {
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
    

}, {
    versionKey: false,
    timestamps: true
});

const ContactModel = new model('Contacts', ContactSchema);

export default ContactModel;
