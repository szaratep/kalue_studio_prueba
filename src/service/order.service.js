import orderModel from "../models/Order.model.js";

const insertOrders = async (newOrder) => {
    return await orderModel.create(newOrder)
};

export {
    insertOrders
}