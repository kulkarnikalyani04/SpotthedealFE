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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();