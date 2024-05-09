const Order = require("../models").orders;
const OrderDetail = require("../models").order_detail;

async function getAllOrders(req, res) {
    const orders = await Order.findAll();
    res.json(orders);
}

async function getOrderById(req, res) {
    const { orderId } = req.params;
    const order = await Order.findByPk(orderId);
    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
}

async function getOrderDetails(req, res) {
    const { orderId } = req.params;
    const orderDetail = await OrderDetail.findAll({ where: { order_id: orderId } });
    if (!orderDetail) {
        return res.status(404).json({ message: "OrderDetail not found" });
    }
    res.json(orderDetail);
}

const newOrderDetail = async (req, res, next) => {
    const { order_id,
        book_id,
        quantity,
        total_detail } = req.body;
    const newOrderDetail = await OrderDetail.create({
        order_id,
        book_id,
        quantity,
        total_detail
    });
    res.json(newOrderDetail);
}


async function createOrder(req, res) {
    const { user_id, total_price, adress, zipcode } = req.body;
    const newOrder = await Order.create({ user_id, total_price, adress, zipcode });
    res.json(newOrder);

}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrderDetails,
    newOrderDetail,
    createOrder,
};