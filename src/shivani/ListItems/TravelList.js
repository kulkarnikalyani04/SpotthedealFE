import React from 'react';
import './TravelList.css';

const Travel = ({ name, image }) => {
  return (
    <div className="travel">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const travel = [
  {
    id: 1,
    name:'Flights Booking',
    image: 'https://www.shivamtravels.net/img/Air%20ticket%20banner.jpg',
  },
  {
    id: 2,
    name: 'Flat 5%',
    image: 'https://gos3.ibcdn.com/top-1612520256.jpg',
  },
  {
    id: 3,
    name: 'Travel Sale',
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-travel-agency-sale-background_23-2149376935.jpg',
  },
  {
    id: 4,
    name: 'HSBC Credit Card offer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CIV38CkpMyqR6XvlMOXnv1W0wUfYY5m973pc4poCShfKAZ5c',
  }
];
         
const TravelList = () => {
  return (
    <div className="travel-list">
      {travel.map((travel) => (
        <Travel key={travel.id} name={travel.name} image={travel.image} />
      ))}
    </div>
  );
};

export default TravelList;