import React from 'react';
import './ProductDetailsPage.css'; // Import the CSS file
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ProductDetailsPage = () => {
  // Sample product data
  const product = {
    id: 1,
    title: 'Product Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    specifications: {
      color: 'Black',
      size: 'Medium',
      material: 'Cotton',
      dimensions: '50cm x 70cm',
    },
    price: 2000,
    stock: 10,
    rating: 4.5,
    reviews: 25,
    imageURL: 'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY=',
  };

  const variantOptions = [
    { id: 1, label: 'Color', options: ['Red', 'Blue', 'Green'] },
    { id: 2, label: 'Size', options: ['Small', 'Medium', 'Large'] },
    { id: 3, label: 'Material', options: ['Cotton', 'Polyester', 'Silk'] },
  ];

  
  // Sample additional information
  const additionalInformation = [
    { id: 1, label: 'Technical Support', value: 'support@example.com' },
    { id: 2, label: 'Warranty', value: '1 Year' },
    { id: 3, label: 'Shipping', value: 'Free Shipping' },
  ];

  return (
    <div className="product-details-page">
      <div className="product-image">
        <img src={product.imageURL} alt="Product" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>Color: {product.specifications.color}</li>
            <li>Size: {product.specifications.size}</li>
            <li>Material: {product.specifications.material}</li>
            <li>Dimensions: {product.specifications.dimensions}</li>
          </ul>
        </div>
        <div className="product-pricing">
          <p className="product-price">INR {product.price}</p>
          <p className="product-stock">
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
        <div className="product-rating">
          <p className="rating">{product.rating}</p>
          <p className="reviews">{product.reviews} Reviews</p>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      {/* Additional components like related products, customer reviews, etc. */}
      <div className="product-info">
        {/* ... */}
        <div className="product-variants">
          <h3>Variants and Options:</h3>
          {variantOptions.map((option) => (
            <div key={option.id}>
              <p>{option.label}:</p>
              <select>
                {option.options.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        
        <div className="social-sharing">
        <h3>Share on Social Media:</h3>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
          
     
        <div className="additional-information">
          <h3>Additional Information:</h3>
          {additionalInformation.map((info) => (
            <div key={info.id}>
              <p>{info.label}: {info.value}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default ProductDetailsPage;