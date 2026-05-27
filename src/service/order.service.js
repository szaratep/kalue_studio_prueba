import orderModel from "../models/Order.model.js";

const dbInsertOrders = async (newOrder) => {
    return await orderModel.create(newOrder)
};

const dbGetOrders = async () => {
    return await orderModel.find();
};

const dbUpdateOrders = async(newOrder) => {
    return 
}

const dbDeleteOrders = async(OrderId) => {
    return await orderModel.deleteOne();
}

export {
    dbInsertOrders,
    dbGetOrders,
    dbUpdateOrders,
    dbDeleteOrders
}