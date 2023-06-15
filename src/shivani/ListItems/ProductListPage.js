import React from 'react';
import ProductList from './ProductList';
import HomeList from './HomeList';
import MovieList from './MovieList';
import FitnessList from './FitnessList';
import ClothList from './ClothList';
import BeautyList from './BeautyList';
import FrutsvegiesList from './Frutsvegies';
import MobileList from './MobileList';
import TravelList from './TravelList';
import CraftList from './CraftList';

function ProductListPage() {
  return (
    <div className="App">
    <h1>Gaming Laptop</h1>
      <ProductList />,
      <h1>Home Appliances</h1>
      <HomeList />,
      <h1>Letest Movies</h1>
      <MovieList />,
      <h1>Fitness</h1>
      <FitnessList/>,
      <h1>Cloths</h1>
      <ClothList/>,
      <h1>Beauty Products</h1>
      <BeautyList/>,
      <h1>Fruts & vegetables</h1>
      <FrutsvegiesList/>,
      <h1>Mobile Phones</h1>
      <MobileList/>,
      <h1>Travel</h1>
      <TravelList/>,
      <h1>Craft Products</h1>
      <CraftList/>,
      
    </div>
  );
}

export default ProductListPage;