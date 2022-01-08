import dbConnect from '../../../lib/mongo.js';
import Order from '../../../models/Order.js';

const handler = async (req, res) => {
    const { method } = req;

    await dbConnect();

    if(method === 'GET'){
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    if(method === 'POST'){
        try {
            const order = await Order.create(req.body)
            res.status(201).json(order)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}
export default handler;
