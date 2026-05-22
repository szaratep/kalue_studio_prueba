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
