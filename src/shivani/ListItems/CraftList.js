import React from 'react';
import './CraftList.css';

const Craft = ({ name, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const crafts = [
  {
    id: 1,
    name:' Mulberry Paper Sheet',
    image: 'https://m.media-amazon.com/images/I/81l7bXcVcDL.jpg',
  },
  {
    id: 2,
    name: 'Caliart Acrylic Paint Set With 12 Brushes',
    image: 'https://www.dontwasteyourmoney.com/wp-content/uploads/2021/12/caliart-brushes-acrylic-paint-craft-supplies-24-colors-craft-supplies.jpg',
  },
  {
    id: 3,
    name: 'Clay',
    image: 'https://m.media-amazon.com/images/I/7165R4u5hWL._SX522_.jpg',
  },
  {
    id: 4,
    name: 'Mirror Combo of 5 Shapes',
    image: 'https://breeze-media.embroiderymaterial.com/media/catalog/product/cache/6ff0df3a4a2c190d7cf3bc205fee8c1d/e/m/embsm08970.jpg',
  }
];
         
const CraftList = () => {
  return (
    <div className="Craft-list">
      {crafts.map((craft) => (
        <Craft key={craft.id} name={craft.name} image={craft.image} />
      ))}
    </div>
  );
};

export default CraftList;