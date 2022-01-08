import dbConnect from '../../../lib/mongo.js';
import Order from '../../../models/Order.js';

const handler = async (req, res) => {
    const { method, query:{id} } = req;

    if(method === 'GET'){}
    if(method === 'PUT'){}
    if(method === 'DELETE'){}
}

export default handler;