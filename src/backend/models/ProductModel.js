const mongoose = require('mongoose');

//Schema

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productDescription: {
            type: String,
            required: false
        },
        productImage: {
            type: String,
            required: true
        },
        brand: {
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
        category: {
            type:String,
            required: true,
        },
        origin: {
            type:String,
            required: false,
        },
        dietaryNeeds: {
            type:String,
            required: true,
        },
        storageReq: {
            type:String,
            required: true,
        },
        shelfLife: {
            type:Number,
            required: false,
        },
        quantity: {
            type:Number,
            required: true,
        }
    }
)

//Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export the model
module.exports = ProductModel;