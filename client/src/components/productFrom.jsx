import React, { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Create a FormData object to send multipart/form-data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);

    // Send the form data to the API endpoint for adding a product
    fetch('http://localhost:5000/api/post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        // Handle success or navigation logic here
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        // Handle error state or display error message
      });
  };

  return (
    <form onSubmit={handleAddProduct}>
      {/* ...Your form inputs for adding products */}
    </form>
  );
};

export default ProductForm;
