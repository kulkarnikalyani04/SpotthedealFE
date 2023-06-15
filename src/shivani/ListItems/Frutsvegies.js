import React from 'react';
import './Frutsvegies.css';

const Frutsvegies = ({ name, image }) => {
  return (
    <div className="Frutsvegies">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const frutsvegies = [
  {
    id: 1,
    name:'Fresh Strawberry',
    image: 'https://m.media-amazon.com/images/I/61hVLTBkByL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    name: 'Tomato',
    image: 'https://rukminim1.flixcart.com/image/612/612/ked56kw0/vegetable/z/j/t/1-tomato-local-un-branded-no-whole-original-imafv2fthb6wgv4p.jpeg?q=70',
  },
  {
    id: 3,
    name: 'Apple',
    image: 'https://rukminim1.flixcart.com/image/612/612/l2xmqvk0/fruit/m/1/r/4-1-washington-whole-original-image65azynjtk3q.jpeg?q=70',
  },
  {
    id: 4,
    name: 'Brinjal',
    image: 'https://rukminim1.flixcart.com/image/612/612/kdga1zk0/vegetable/t/g/z/500-brinjal-bottle-shape-un-branded-whole-no-original-imafuchncgk7tync.jpeg?q=70',
  }
];
         
const FrutsvegiesList = () => {
  return (
    <div className="Frutsvegies-list">
      {frutsvegies.map((frutsvegies) => (
        <Frutsvegies key={frutsvegies.id} name={frutsvegies.name} image={frutsvegies.image} />
      ))}
    </div>
  );
};

export default FrutsvegiesList;