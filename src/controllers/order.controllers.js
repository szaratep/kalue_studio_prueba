import { dbGetOrders, dbInsertOrders,  } from '../service/order.service.js';

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

function deleteOrder (req, res){
    res.json({
        msg: 'elimina una orden de un usuario'
    })
}

export {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}