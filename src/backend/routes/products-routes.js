const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel');

// products/add
router.post('/add',
    function (req, res) {
        let newDocument = {
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
            .create(newDocument)
            .then(
                function (dbDocument) {
                    res.json(dbDocument)
                }
            )
            .catch(
                function(error) {
                    console.log('/addproduct error', error);
                    res.send('An error occured');
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