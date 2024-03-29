const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({    
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }]
})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart