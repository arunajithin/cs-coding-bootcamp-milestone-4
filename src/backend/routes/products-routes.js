const express = require('express');
const router = express.Router();

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

// This is similar to salt in bcrypt
const jwtSecret = process.env.JWT_SECRET;

const ProductModel = require('../models/ProductModel');
const passport = require('passport');

// products/add
router.post('/add',
    function (req, res) {
        const newDocument = {
            "sku": req.body.sku,
            "productName": req.body.productName,
            "productDescription": req.body.productDescription,
            "productImage": req.body.productImage,
            "brand": req.body.brand,
            "price": req.body.price,
            "category": req.body.category,
            "origin": req.body.origin,
            "dietaryNeeds": req.body.dietaryNeeds,
            "storageReq": req.body.storageReq,
            "shelfLife": req.body.shelfLife,
            "quantity": req.body.quantity
        }


        ProductModel
        .findOne( { sku: newDocument['sku']} )
        .then(
            async function (dbDocument) {
                // If avatar file is included...
                if( Object.values(req.files).length > 0 ) {

                    const files = Object.values(req.files);
                    
                    
                    // upload to Cloudinary
                    await cloudinary.uploader.upload(
                        files[0].path,
                        (cloudinaryErr, cloudinaryResult) => {
                            if(cloudinaryErr) {
                                console.log(cloudinaryErr);
                                res.json(
                                    {
                                        status: "not ok",
                                        message: "Error occured during image upload"
                                    }
                                )
                            } else {
                                // Include the image url in newDocument
                                newDocument.productImage = cloudinaryResult.url;
                                console.log('newDocument.productImage', newDocument.productImage)
                            }
                        }
                    )
                };

                // If product is unique...
                if(!dbDocument) {
           
                    // Create the user's account with hashed password
                    ProductModel
                    .create(newDocument)
                    // If successful...
                    .then(
                        function(createdDocument) {
                            // Express sends this...
                           res.json({
                               status: "ok",
                               createdDocument
                            });
                        }
                    )
                    // If problem occurs, the catch the problem...
                    .catch(
                        function(dbError) {
                            // For the developer
                            console.log('An error occured during .create()', dbError);

                            // For the client (frontend app)
                            res.status(503).json(
                                {
                                    "status": "not ok",
                                    "message": "Something went wrong with db"
                                }
                            )
                        }
                    )

                }
                // If product is NOT unique....
                else { 
                    // reject the request
                    res.status(403).json(
                        {
                            "status": "not ok",
                            "message": "Product already exists"
                        }
                    )
                }
            }
        )
        .catch(
            function(dbError) {

                // For the developer
                console.log(
                    'An error occured', dbError
                );

                // For the client (frontend app)
                res.status(503).json(
                    {
                        "status": "not ok",
                        "message": "Something went wrong with db"
                    }
                )

            }
        )
        
    }
);

// products/listing
router.post('/list',
    function(req, res) {
        ProductModel
        .find(req.query)
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('products/list error', error);

                res.send('An error occured');
            }
        )
    }
);

// products/update
router.put('/update',

function(req,res){

    let updates = {}
    
     if (req.body.productName){ 
        updates['productName'] = req.body.productName; 
     };
     if (req.body.productDescription){ 
        updates['productDescription'] = req.body.productDescription; 
      };
     if (req.body.productImage){ 
        updates['productImage'] = req.body.productImage; 
      };
    if (req.body.brand){ 
        updates['brand'] = req.body.brand; 
    };
    if (req.body.price) {
        updates['price'] = req.body.price;
    };
    if (req.body.category) {
        updates['category'] = req.body.category;
    };
    if (req.body.origin) {
        updates['origin'] = req.body.origin;
    };
    if (req.body.dietaryNeeds) {
        updates['dietaryNeeds'] = req.body.dietaryNeeds;
    };
    if (req.body.storageReq) {
        updates['storageReq'] = req.body.storageReq;
    };
    if (req.body.shelfLife) {
        updates['shelfLife'] = req.body.shelfLife;
    };


    UserModel
    .findOneAndUpdate(
        {
            "sku": req.body.sku
        },
        {
            $set: updates
        },
        {

            new: true
        }
    )
    .then(
        function(dbDocument) {
            res.json(dbDocument)
        }
    )
    .catch(
        function(error) {
            console.log('/products/update error',error);
            res.send('An error ocured');
        }
    )
    }  

);

module.exports = router;