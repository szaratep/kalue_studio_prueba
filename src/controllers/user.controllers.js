import UserModel from "../models/User.models.js";

function getUser  (req, res) {
    res.json({
        msg: "Listar todos los usuarios"
    })
}

function updateUser ( req, res){
    res.json ({
        msg: "Actualizar usuarios"
    })
}

function deleteUser ( req, res){
    res.json ({
        msg: "Eliminar usuarios"
    })
}

async function createUser ( req, res){
    const inputData = req.body;
    const productCreated = await UserModel.create(inputData); 

    res.json ({
        data: productCreated
    })
}

export {
    getUser,
    updateUser,
    deleteUser,
    createUser
};