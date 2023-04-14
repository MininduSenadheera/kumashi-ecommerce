const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({    
    patientID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'patient',
        required : true
    },

    products : {
        type : Array,
        required : true
    }
})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart