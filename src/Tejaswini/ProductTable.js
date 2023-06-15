import React, { useState } from 'react';
import './ProductTable.css'
const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleInputChange = (event) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.name]: event.target.value
    });
  };

  const handleAddProduct = () => {
    setProducts([...products, currentProduct]);
    setCurrentProduct({});
  };

  const handleDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
  };

  return (
    <div>
      {!showDetails ? (
        <div>
          <center>
          <h2>Product Table</h2>

          <table id='table'>
            <thead id='td'>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button id='btn' onClick={() => handleDetails(product)}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table><br/><br/><br/>
        
          <h3>Add Product</h3>
            <input type="text" name="id" placeholder='ID' value={currentProduct.id || ''} onChange={handleInputChange} />
            <input type="text" name="name" placeholder='Name' value={currentProduct.name || ''} onChange={handleInputChange} />
            <input type="text" name="price" placeholder='Price' value={currentProduct.price || ''} onChange={handleInputChange} />
            <input type="text" name="description" placeholder='Discription' value={currentProduct.description || ''} onChange={handleInputChange} /><br/><br/><br/>
            <button id='btnadd' onClick={handleAddProduct}>Add</button>
        </center>
        </div>
      ) : (
        <div className="cart">
          <h2>Order Summary</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Product Name: {selectedProduct.name}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Discount: 10%</p>
          <p>Total Price: {selectedProduct.price - (selectedProduct.price * 0.1)}</p>
          <button id='btngoback' onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
