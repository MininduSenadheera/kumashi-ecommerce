const Cart = require('../models/Cart');

exports.createCart = async(req,res) => {
    const { userId, products } = req.body;
    const options = { new: true, upsert: true };
    try {
        
        //creating a new add order
        await Cart.findOneAndUpdate(userId, { userId, products }, options);
        res.status(200).json({success: true,message:"Added to cart"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Added to cart", error: error.message})
    }
}

exports.getCartByUserId = async(req,res) => {
    let userId = req.params.id;
   
    try {
        const cart = await Cart.findOne({userId})
            .populate({ path: 'products.productId', select: ['name', 'imagePath', 'category', 'price'] });
        res.status(200).json({success: true, data:cart})
    }catch(error){
        res.status(500).json({message: "Error with fetching cart products", error: error.message})
    }
}

exports.getCartById = async(req,res) => {
    let cartId = req.params.id;
   
    try {
        const cart = await Cart.findById(cartId)
            .populate({ path: 'products.productId', select: ['name', 'imagePath', 'category', 'price'] });
        res.status(200).json({success: true, data:cart})
    }catch(error){
        res.status(500).json({message: "Error with fetching cart products", error: error.message})
    }
}

exports.removeProduct = async(req,res) => {
    const cartId = req.body._id
    const updateProducts = req.body.products

    try {
        await Cart.updateMany({ _id: cartId }, { $set: { products: updateProducts } });
        
        res.status(200).json({success: true,message:"Product removed"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to removed product", error: error.message})
    }
}

exports.deleteCartById = async(req,res) => {
    let cartId = req.params.id;
   
    try {
        await Cart.findByIdAndDelete(cartId);

        res.status(200).json({success: true, message: "Cart cleared"})
    } catch (error) {
        res.status(500).json({message: "Failed to clear the cart", error: error.message});
    }
}