import React, { useState } from 'react';
import './ProductTable.css'
const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setCurrentProduct({
      ...currentProduct,
      [event.target.name]: event.target.value
    });
  };

  const handleAddProduct = () => {
    if (!currentProduct.id || !currentProduct.name || !currentProduct.price || !currentProduct.description) {
      setErrorMessage('Please enter data');
      return;
    }

    setProducts([...products, currentProduct]);
    setCurrentProduct({});
    setErrorMessage('');
  };

  const handleDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
  };

  return (
    <div className='ProductTable'>
      {!showDetails ? (
        <div>
          <center>
          <h2>Product Table</h2>
        
          <table>
            <thead>
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
                    <button id='btndetails' onClick={() => handleDetails(product)}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table><br/><br/>

          <h3>Add Product</h3>
            <input type="text" placeholder='Product Id' name="id" value={currentProduct.id || ''} onChange={handleInputChange} />         
            <input type="text" placeholder='Product Name' name="name" value={currentProduct.name || ''} onChange={handleInputChange} />        
            <input type="text" placeholder='Price' name="price" value={currentProduct.price || ''} onChange={handleInputChange} />
            <input type="text" placeholder='Dicscription' name="description" value={currentProduct.description || ''} onChange={handleInputChange} /><br/><br/><br/>
          {errorMessage && <p>{errorMessage}</p>}
          <div>
            <button id='btnadd' onClick={handleAddProduct}>Add</button>
          </div></center>
        </div>
        
      ) : (
        <div className="cart">
          <h2>Product Details</h2>
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
