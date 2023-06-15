import React from 'react';
import './FitnessList.css';

const Fitness = ({ name, image }) => {
  return (
    <div className="Fitness">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const fitness = [
  {
    id: 1,
    name:'Gym Set',
    image: 'https://m.media-amazon.com/images/I/81XNzjmXi+L._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    name: 'SPARNOD FITNESS STH-2150 ',
    image: 'https://m.media-amazon.com/images/I/51BR164P+HL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    name: 'Yoga and Exercise mat',
    image: 'https://m.media-amazon.com/images/I/61i+MEUIOPL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    name: 'Fusion Pro Spin Fitness Bike',
    image: 'https://m.media-amazon.com/images/I/71xXaJ6dglL._SX522_.jpg',
  }
];
         
const FitnessList = () => {
  return (
    <div className="fitness-list">
      {fitness.map((fitness) => (
        <Fitness key={fitness.id} name={fitness.name} image={fitness.image} />
      ))}
    </div>
  );
};

export default FitnessList;