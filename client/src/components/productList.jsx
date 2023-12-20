import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/get')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); 
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.productName}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            {/* Display image if available */}
            {product.image && <img src={product.image} alt={product.productName} />}
          </li>
        ))}
      </ul>
      <Link to="/add-product">Add Product</Link>
    </div>
  );
};

export default ProductList;
