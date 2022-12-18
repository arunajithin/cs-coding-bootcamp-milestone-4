import React from "react";
import {useEffect, useState} from "react";
//import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {

    const [productDetails, setProductDetails] = useState();

    useEffect(
      function () {
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/products/list`, {
          method: "POST"
        
        })
          // This will recieve string data and convert to json
          .then(function (backendReponse) {
            return backendReponse.json();
          })
          // This will receie the converted json
          .then(function (jsonResponse) {
            setProductDetails(jsonResponse);
          })
          // This will catch errors if any
          .catch(function (backendError) {
            console.log("backendError", backendError);
          });
      },
  
      // This array is empty because useEffect will run once only
      []
    );
  
    if (productDetails) {

        const products = productDetails.map(product => {
            return (
                <div key={product.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={product.productImage}
                        alt={product.productName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <Link to={`/products/${product.id}`}>{product.productName}</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {product.category}
                            </Typography>
                            <p>Price: AED {product.price}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            );
        });
    
        return (
            <Box className="listProducts" sx={{ my: 6, mx: 6 }}>
                <Container maxWidth="lg" sx={{ py: 6, px: 4}}>
                    <h1>Products Page</h1>
                    {products}
                </Container>
            </Box>
        );

    }
     else {
      return <p>Loading...</p>;
    }

   
};

export default Products;