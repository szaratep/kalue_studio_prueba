import orderModel from "../models/Order.model.js";

const insertOrders = async () => {
    return await orderModel.create(newOrder)
};

export {
    insertOrders
}