import React from 'react';
import './ClothList.css';

const Cloth = ({ name, image }) => {
  return (
    <div className="Cloth">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const cloths = [
  {
    id: 1,
    name:'Casual Shirt for Men',
    image: 'https://m.media-amazon.com/images/I/71MaGTXl7ML._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    name: 'T-Shirt For Girls',
    image: 'https://m.media-amazon.com/images/I/41KCMbKZ7ZL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    name: 'Casual Wear Western Dress',
    image: 'https://m.media-amazon.com/images/I/41Te6NH-KWL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    name: ' Baby Cotton Tshirt Pant Set',
    image: 'https://m.media-amazon.com/images/I/51nUfiMuCLL._UX679_.jpg',
  }
];
         
const  ClothList= () => {
  return (
    <div className="cloth-list">
      {cloths.map((cloth) => (
        <Cloth key={cloth.id} name={cloth.name} image={cloth.image} />
      ))}
    </div>
  );
};

export default ClothList;