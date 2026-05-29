import { dbCreateUser, dbDeleteUser, dbGetUserByID, dbGetUsers, dbUpdateUser } from "../service/user.service.js";

async function getUser(req, res) {
    try {
        const data = await dbGetUsers();

        res.status(200).json({
            msg: 'Se han listado los usuarios exitosamente',
            data: data
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'No se encuentra nigun registro'
        })
    }
}

async function getUserById(req, res) {
    try {
        const id = req.params.idUser;

        const data = await dbGetUserByID(id);

        res.status(200).json({
            msg: 'Se encontro el usuario exitosamente',
            data: data
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'El usuario no existe'
        })
    }
}

async function updateUser(req, res) {
    try{
        const id = req.params.idUser;
        const inputData = req.body;

        const data = await dbUpdateUser(id, inputData);

        res.status(200).json({
            msg: 'Se actualiza el registro exitosamente',
            data: data
        })
    }catch(error){
        console.error(error);

        if (error.name === 'ValidationError') {
            const errorDetails = {};

            Object.entries(error.errors).forEach(([field, errObj]) => {
                errorDetails[field] = errObj.message;
            });

            return res.status(400).json({
                msg: `Error de validacion en propiedades del producto`,
                errors: errorDetails
            });
        }

        res.status(500).json({
            msg: 'No se logro actualizar el usuario'
        })
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params.idUser;

        const data = await dbDeleteUser(id);

        res.status(200).json({
            msg: 'El usuario se borro exitosamente',
            data: data
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'No se logro borrar al usuario'
        })
    }
}

async function createUser(req, res) {
    try {
        const inputData = req.body;
        const data = await dbCreateUser(inputData);

        res.status(201).json({
            data: data
        })
    } catch (error) {
        console.error(error);

        if (error.name === 'ValidationError') {
            const errorDetails = {};

            Object.entries(error.errors).forEach(([field, errObj]) => {
                errorDetails[field] = errObj.message;
            });

            return res.status(400).json({
                msg: `Error de validacion en propiedades del producto`,
                errors: errorDetails
            });
        }

        res.status(500).json({
            msg: "No se logro el registro de tu usuario"
        })
    }
}

export {
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    createUser
};