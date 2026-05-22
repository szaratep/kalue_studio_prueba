import UserModel from "../models/User.model.js";

// Services: Su funcion es comunicarse con la base de datos
const insertUser = async (newUser) => {
    return await UserModel.create(newUser);  
}

export {
    insertUser
}