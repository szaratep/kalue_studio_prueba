import { insertOrders } from '../service/order.service.js';

function getOrder (req, res){
    res.json({
        msg: 'lee todos las ordenes de un usario'
    })
}

async function createOrder (req, res){
    try{
        const inputData = req.body;

        const data = await insertOrders(inputData);

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