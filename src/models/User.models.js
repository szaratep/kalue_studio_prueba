import { Schema, Types, model } from 'mongoose';

//Primera parte: definir el schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
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
        minLength: 8,
        trim: true
    },

    phoneNumber: {
        type: String,
        minLength: 10,
        maxLength: 10,
        trim: true
    },

    birthdate: {
        type: Date,
        required: true,
    }
},{});

//Segunda parte: definir el modelo
const UserModel = new model('Users', UserSchema);

export default UserModel;
