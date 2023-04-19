const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { userId, products, amount } = req.body;
    let today = new Date();
    const date = (today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear());
    try {
    
        await Order.create({ userId, products, amount, date });
        res.status(200).json({success: true,message:"Order Added"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to add order", error: error.message})
    }
}
