const mongoose = require('mongoose');

//Schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true,
        },
        lastName: {
            type:String,
            required: true,
        },
        email: {
            type:String,
            required: true,
        },
        phone: {
            type:String,
            required: true,
        },
        password: {
            type:String,
            required: true,
        },
        dateCreated: {
            type:Date,
            required: true,
            default: Date.now,
        },
        loyaltyMember: {
            type:Boolean,
            required: false,
        },
        dob: {
            type:Date,
            required: false,
        }
    }
);

//Model
const UserModel = mongoose.model('users', UserSchema);

// Export the model
module.exports = UserModel;