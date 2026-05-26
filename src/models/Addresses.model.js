import {Schema, model } from 'mongoose';

const AddressesSchema = new Schema({
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

export default AddressesSchema;
