import mongoose from 'mongoose';

async function dbConect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/Kalue_studio_db');
        console.log ('Connected to MongoDB local')
    }catch(error){
        console.error('Coneccion a la base de datos fallida\n\nError:\n' + error)
    }
}

export default dbConect;  