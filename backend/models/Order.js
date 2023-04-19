const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({    
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }],

    amount:{
        type:Number,
        required: true
    },

    date:{
        type:String,
        required:true, 
    }
})

const Order = mongoose.model("Order",OrderSchema)
module.exports = Order