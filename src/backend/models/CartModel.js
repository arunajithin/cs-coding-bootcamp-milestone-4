const mongoose = require('mongoose');

//Schema

const CartSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            required: true
        },
        productID: {
            type:String,
            required: true,
        },
        sku:{
            type:String,
            required: true,
        },
        price: {
            type:Number,
            required: true,
        },
        quantity: {
            type:Number,
            required: true,
        },
        lastUpdated: {
            type:Date,
            required: true,
        }
    }
)

//Model
const CartModel = mongoose.model('cart', CartSchema);

// Export the model
module.exports = CartModel;