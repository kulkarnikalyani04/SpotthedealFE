import React, { useState } from 'react';
import './ProductScreen.css';

const ProductForm = ({ onSubmit, onViewProducts }) => {
  const [productData, setProductData] = useState({
    productName: '',
    quantity: '',
    description: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
    setProductData({
      productName: '',
      quantity: '',
      description: '',
      price: '',
      category: '',
    });
  };

  return (
    <div className="product-form-container">
      <h2 id='form-h2'>Add Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" name="productName" value={productData.productName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={productData.category} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
        <button className="view-products-btn" onClick={onViewProducts}>
          View Products
        </button>
      </form>
    </div>
  );
};

const ProductList = ({ products, onBackToForm }) => {
  return (
    <>
    <h2 id='list-h2'>Product List</h2>
      <button className="back-btn" onClick={onBackToForm}>
        Back
      </button>
    <div className="product-list-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState(false);
  const [productId, setProductId] = useState(1);
  const [productData, setProductData] = useState({
    productName: '',
    quantity: '',
    description: '',
    price: '',
    category: '',
  });

  const handleProductSubmit = (productData) => {
    const newProduct = { id: productId, ...productData };
    setProducts([...products, newProduct]);
    setProductId(productId + 1);
    setProductData({
      productName: '',
      quantity: '',
      description: '',
      price: '',
      category: '',
    });
  };

  const handleBackToForm = () => {
    setViewProducts(false);
  };

  const handleViewProducts = () => {
    setViewProducts(true);
  };

  return (
    <div className="product-screen-container">
      {!viewProducts ? (
        <ProductForm onSubmit={handleProductSubmit} onViewProducts={handleViewProducts} />
      ) : (
        <ProductList products={products} onBackToForm={handleBackToForm} />
      )}
    </div>
  );
};

export default ProductScreen;
