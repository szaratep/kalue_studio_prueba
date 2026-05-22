import { insertUser } from "../service/user.service.js";

function getUser(req, res) {
    res.json({
        msg: "Listar todos los usuarios"
    })
}

function updateUser(req, res) {
    res.json({
        msg: "Actualizar usuarios"
    })
}

function deleteUser(req, res) {
    res.json({
        msg: "Eliminar usuarios"
    })
}

async function createUser(req, res) {

    try {
        const inputData = req.body;
        const data = await insertUser(inputData);

        res.status(201).json({
            data: data
        })
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: "No se logro el registro de tu usuario"
        })
    }
}

export {
    getUser,
    updateUser,
    deleteUser,
    createUser
};