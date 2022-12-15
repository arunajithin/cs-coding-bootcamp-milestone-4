import React from "react";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";

function ProductList(){
  const products = ProductsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default ProductList;