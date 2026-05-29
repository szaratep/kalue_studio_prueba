import { dbGetUsers } from "../service/user.service"

async function getContact(req, res) {
    try{
        const data = dbGetUsers();

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

    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: ''
        })
    }
}