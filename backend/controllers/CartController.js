const Cart = require('../models/Cart');

exports.addProductToCart = async(req,res) => {
    const {userId,productList} = req.body;
    try {
        //creating a new add order
        await Cart.findByIdAndUpdate(userId,productList,upsert);
        res.status(200).json({success: true,message:"Added to cart"})

    } catch (error) {
        res.status(500).json({message: "Added to cart", error: error.message})
    }
}

exports.getCartByPatientId = async(req,res) => {
    let userId = req.params.id;
   
    try {
        //find cart by patient id and order
        const cart = await Cart.find({userId}).populate(
            {path:'productId', select:['name','imgUrl','amount']});
        res.status(200).json({success: true, data:order})
    }catch(error){
        res.status(500).json({message: "Error with fetching orders", error: error.message})
    }
}

exports.deleteCartById = async(req,res) => {
    let cartId = req.params.id;
   
    try {
        //find cart by cartId and delete it
        await Cart.findByIdAndDelete(cartId);

        res.status(200).json({success: true, message: "Cart cleared"})
    } catch (error) {
        res.status(500).json({message: "Failed to clear the cart", error: error.message});
    }
}