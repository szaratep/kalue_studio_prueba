import {Schema, model } from 'mongoose';

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

const addressesModel = new model('Adresses', addressesSchema);

export default addressesModel;
