import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Products = () => {

  const [productDetails, setProductDetails] = useState();

  async function addToCart(id, quantity) {
    try {
      const response = await fetch(`/cart`, {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }

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
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
              <Typography variant="h2" gutterBottom>Dairy & Eggs</Typography>
        <Grid container spacing={3}>
          {productDetails.map(product => {
            if (product.category === "Dairy & Eggs") {
              return (
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: "550px" }}>
                    <CardMedia sx={{ width: "300px", height: "350px", margin: "auto" }}
                      component="img"
                      image={product.productImage}
                      alt={product.productName}
                    />
                    <CardContent>
                      <Typography gutterBottom fontSize="20px" component="div" sx={{width: "300px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}} >
                        <Link to={'#'}>{product.productName}</Link>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                      <p>Price: AED {product.price}</p>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={(e) => addToCart(product.id, 1)}>Add To Cart</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
              }
            })} </Grid></Container>
    );
  }

  else {
    return (<p>Loading...</p>);
  }


};

=======
import React from "react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Products = () => {

    const [productDetails, setProductDetails] = useState();

    async function addToCart(id, quantity) {
      try {
        const response = await fetch(`/cart`, {
          method: "POST",
          body: JSON.stringify({
            productId: id,
            quantity: quantity,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        let data = await response.json();
        alert("Item Added To Cart");
        console.log(data);
      } catch (err) {
        alert("Something Went Wrong");
        console.log(err);
      }
    }

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
      return (
        <Container maxWidth="lg" sx={{ py: 6}}>
      <Grid container spacing={3}>
        {productDetails.map(product => {
            return(
                
                  <Grid item xs={12} md={4} key={product.id}>
                  <Card>
                        <CardMedia sx={{ width: "300px", height: "300px", margin: "auto" }}
                        component="img"
                        image={product.productImage}
                        alt={product.productName}
                        />
                        <CardContent>
                            <Typography gutterBottom fontSize="20px" component="div">
                            <Link to={`/products/${product.id}`}>{product.productName}</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {product.category}
                            </Typography>
                            <p>Price: AED {product.price}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={(e) => addToCart(product.id, 1)}>Add To Cart</Button>
                        </CardActions>
                    </Card>
                  </Grid>
            ); 
            
        })} </Grid></Container>
        );
        }
        
     else {
      return(<p>Loading...</p>);
    }
    

};

export default Products;