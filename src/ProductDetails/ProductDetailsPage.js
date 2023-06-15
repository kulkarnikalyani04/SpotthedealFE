import React from 'react';
import { TbTruckDelivery,TbReplace  } from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import './ProductDetailsPage.css';
// import product from './Product.js';

const ProductDetailsPage = () => {
  // Placeholder product data
  const product = {
    id: 1,
    name: 'Acer NITRO',
    description: 'Acer Nitro 5 12th Gen Intel Core Intel Core i5-12500H Processor 15.6-inch (39.62 cms) FHD 144 Hz Gaming Laptop (16 GB RAM/RTX 3050 Graphics/512 GB SSD/Windows 11 Home/2.5 Kgs/RGB Backlit), AN515-58',
    price: 78990,
    image: "https://m.media-amazon.com/images/I/61N6Ojp790L._SX425_.jpg",
    rating: 4.5,
    reviews: 10,
    stock :9,
    variations: ['Red', 'Blue', 'Green']
  };

  const handleAddToCart = () => {
    // Add to cart logic
    alert('Product added to cart!');
  };

  return (

    <div className="product-details-page">
      <div className="grid-two-column">
      <img src={product.image} alt={product.name} />
      </div>
     
      <h2>{product.name}</h2>
      <p>{product.description}</p>MRP: INR <del>{product.price + 15000}</del>
      <p></p>
      <p>Deal of the Day: INR {product.price}</p>
      <p>Rating: {product.rating}/5 ({product.reviews} reviews)</p>
      <p>Available: {product.stock > 0 ? "In stock" : "Not available"}</p>
      
      <div className='product-warranty-data'>
        <TbTruckDelivery className="warranty-icon "/> 
        <p>Free delivery</p>
      </div>

      <div className='product-warranty-data'>
        <TbReplace className="warranty-icon "/>
        <p>Easy Replace </p>
      </div>

      <div className='product-warranty-data'>
        <MdSecurity className="warranty-icon "/>
        <p>Year Warranty</p>
      </div>

      <label htmlFor="variations">Select Variation:</label>
      <select id="variations">
        {product.variations.map((variation) => (
          <option key={variation} value={variation}>
            {variation}
          </option>
        ))}
      </select>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
