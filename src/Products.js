import React from "react";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Products = () => {
    const products = ProductsData.map(product => {
        return (
            <div key={product.id}>
                <span>{product.category}</span>
                <h3><Link to={`/products/${product.id}`}>{product.productName}</Link></h3>
                <p>Price: AED{product.price}</p>
                <hr />
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
};

export default Products;