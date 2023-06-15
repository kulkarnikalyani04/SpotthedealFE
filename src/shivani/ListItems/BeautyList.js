import React from 'react';
import './BeautyList.css';

const Beauty = ({ name, image }) => {
  return (
    <div className="Beauty">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const beauti = [
  {
    id: 1,
    name:'HUDA BB Beauty Makeup Combo Kit',
    image: 'https://m.media-amazon.com/images/I/61j1NvNaqPL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    name: ' NIVEA Body Lotion',
    image: 'https://rukminim1.flixcart.com/image/612/612/kzrbiq80/moisturizer-cream/5/l/d/-original-imagbzy4cqzgufma.jpeg?q=70',
  },
  {
    id: 3,
    name: 'Beauty Facial Sheet Mask',
    image: 'https://m.media-amazon.com/images/I/91hIRp-+jRL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    name: 'RENEE x VILLAIN Parfum',
    image: 'https://m.media-amazon.com/images/I/51HgQ7n9VcL._AC_UL600_FMwebp_QL65_.jpg',
  }
];
         
const BeautyList = () => {
  return (
    <div className="beauty-list">
      {beauti.map((beauti) => (
        <Beauty key={beauti.id} name={beauti.name} image={beauti.image} />
      ))}
    </div>
  );
};

export default BeautyList;