import React from 'react';
import './HomeList.css';
const Home= ({ name, image }) => {
  return (
    <div className="Home">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
const homes = [
  {
    id: 1,
    name:' Electric Appliances',
    image: 'https://media.istockphoto.com/id/489937474/photo/home-appliances.jpg?s=612x612&w=0&k=20&c=x9MfsuwtJlNhq8uLWOpisy16b9JHfeqqxmeyP4nXoHw=',
  },
  {
    id: 2,
    name: 'Kitchen Appliances ',
    image: 'https://img.taste.com.au/B-2TCKSb/w720-h480-cfill-q80/taste/2022/11/black-friday-kitchen-appliances-183278-1.jpg',
  },
  {
    id: 3,
    name: 'Redmi Smart TV',
    image: 'https://m.media-amazon.com/images/I/71L-lTQnJiL._AC_UL960_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    name: 'Sofa',
    image: 'https://m.media-amazon.com/images/I/81KqvBlrQxL._AC_UL600_FMwebp_QL65_.jpg',
  },
];

const HomeList = () => {
  return (
    <div className="home-list">
      {homes.map((homes) => (
        <Home key={homes.id} name={homes.name} image={homes.image} />
      ))}
    </div>
  );
};

export default HomeList;