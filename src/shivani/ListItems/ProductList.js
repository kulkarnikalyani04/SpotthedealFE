import React from 'react';
import './ProductList.css';

const Product = ({ name, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const products = [
  {
    id: 1,
    name:'HP Victus Gaming Laptop',
    image: 'https://m.media-amazon.com/images/I/617DllYz31L.jpg',
  },
  {
    id: 2,
    name: 'Dell G3 3500 Gaming Laptop',
    image: 'http://www.laptoppricelistchennai.in/images/Dell-G3-3500-Gaming-Laptop-D560319HIN9B.webp',
  },
  {
    id: 3,
    name: 'Lenovo Ideapad Gaming',
    image: 'https://p4-ofp.static.pub/fes/cms/2021/09/17/37n3wsaafhbznkthyo41ul190o035z326891.png',
  },
  {
    id: 4,
    name: 'ASUS ROG Strix G15 Gaming Laptop',
    image: 'https://m.media-amazon.com/images/I/71HmSKxHlCL._AC_UF1000,1000_QL80_.jpg',
  }
];
         
const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} name={product.name} image={product.image} />
      ))}
    </div>
  );
};

export default ProductList;
