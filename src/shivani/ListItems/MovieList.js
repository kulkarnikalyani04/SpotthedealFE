import React from 'react';
import './MovieList.css';

const Movie = ({ name, image }) => {
  return (
    <div className="Movie">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const movies = [
  {
    id: 1,
    name:'Shakuntalam',
    image: 'https://m.media-amazon.com/images/I/81PMsOia+vL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    name: 'PATHAN',
    image: 'https://m.media-amazon.com/images/I/91fDzKqCfdL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    name: 'THANK GOD',
    image: 'https://m.media-amazon.com/images/I/91sqmCEZjVL._AC_UL600_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    name: 'Fast & Furious 9',
    image: 'https://m.media-amazon.com/images/I/91WZGk8ilnL._AC_UL600_FMwebp_QL65_.jpg',
  }
];
         
const MovieList = () => {
  return (
    <div className="Movie-list">
      {movies.map((movies) => (
        <Movie key={movies.id} name={movies.name} image={movies.image} />
      ))}
    </div>
  );
};

export default MovieList;