import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor.css'
import App from './Vendor.jsx';
import reportWebVitals from './reportWebVitals';
import SearchBar from './SearchBar';
import Search from './Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
   <SearchBar/>
    <App/>
  </React.StrictMode>
);

reportWebVitals();