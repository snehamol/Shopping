import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/productList';
import ProductForm from './components/productFrom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
