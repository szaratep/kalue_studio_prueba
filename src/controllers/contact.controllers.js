import { dbCreateContact, dbDeleteContact, dbGetContact, dbGetContactById, dbUpdateContact } from "../service/contact.service.js";

async function getContact(req, res) {
    try{
        const data = await dbGetContact();

        res.status(200).json({
            msg: 'Se listaron los contactos con exito',
            data: data
        })

    }catch(error){
        console.error(error)
        res.status(500).json({
            msg: 'No existen registros'
        })
    }
}

async function getContactById(req, res) {
    try{
        const id = req.params.idContact;

        const data = await dbGetContactById(id);

        res.status(200).json({
            msg: 'Se ha encontrado el contactto con exito',
            data: data
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: 'No se ha logrado encontrar a el contactoi del usuario'
        })
    }
}

async function createContact(req, res){
    try{
        const inputData = req.body;

        const data = await dbCreateContact(inputData);

        res.status(201).json({
            msg: 'Se ha  creado el contacto con exito',
            data: data
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: 'No se logro crear el contacto'
        })

    }
}

async function updateContact(req, res){
    try{
        const id = req.params.idContact;

        const inputData = req.body;

        const data = await dbUpdateContact(id, inputData);

        res.status(200).json({
            msg: "El contacto se ha modificado con exito",
            data: data
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: "El contacto no se puede actualizar"
        })
    }
}

async function deleteContact(req, res){
    try{
        const id = req.params.idContact;

        const data = await dbDeleteContact(id);

        res.status(200).json({
            msg: "El contacto se ha eliminado exitosamente",
            data: data
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: "No se puede eliminar el usuario o no exite"
        })
    }
}

export{
    getContact,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}