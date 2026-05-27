import orderModel from '../models/Order.model.js';
import { dbDeleteOrders, dbGetOrders, dbInsertOrders,  } from '../service/order.service.js';

async function getOrder (req, res){
    try{
        const data = await dbGetOrders();
        
        res.status(200).json({
            data: data
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: 'No existe ningun registro'
        });
    }
}


async function createOrder (req, res){
    try{
        const inputData = req.body;

        const data = await dbInsertOrders(inputData);

        res.status(201).json({
            data: data
        });
    }catch(error){
        res.status(500).json({
            msg:"se genero un error al crear tu orden"
        })
        console.error(error);
    }
}

function updateOrder (req, res){

    
    res.json({
        msg: 'actualiza una orden de un usuario'
    })
}

async function deleteOrder (req, res){
    try{
        const id = req.params.idOrder;

        const data = await dbDeleteOrders(id);

        res.status(200).json({
            msg: 'Orden eliminada exitosamente',
            data : data
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            msg: "no se logro realizar la eliminacion, id invalido"
        })
    }
    
}

export {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}