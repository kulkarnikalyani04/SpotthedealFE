import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';
import SearchBar from './SearchBar';
import "./OrderListingPage/List.css"; 
 
// import axios from 'axios';

function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    // Fetch order details from JSON file or API endpoint

    // axios.get('/api/orders')
    //   .then(response => {
    //     setOrders(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error retrieving order details:', error);
    //   });

    const orderData = [
      { orderNumber: 1, name: 'John Doe', date: '12/03/2023', amount: '2000', status: 'Ordered' },
      { orderNumber: 2, name: 'Jane Smith', date: '16/04/2023', amount: '7000', status: 'Ordered' },
      { orderNumber: 3, name: 'Bob Johnson', date: '23/06/2023', amount: '5000', status: 'Ordered' },
    ];
    setOrders(orderData);

  }, []);

  return (

    <div className='order'>
      <SearchBar/>
      <h1 >New Customers</h1>

      <table border="3px" width="100%">
      {/* <table width="100%"  border="1px solid black"> */}
      {/* <table width="100%" > */}
        <thead>

          <tr  >
            <th className='order_list'>Order No.</th>
            <th className='order_list'>Date of purchase</th>
            <th className='order_list'>Price</th>
            <th className='order_list'>Delivered To</th>
            <th className='order_list'>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((element, index) => (
            <tr key={index}>
              <td className="table-cell">{element.orderNumber}</td>
              <td className="table-cell">{element.date}</td>
              <td className="table-cell">{element.amount}</td>
              <td className="table-cell">{element.name}</td>
              <td className="table-cell">{element.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default OrderTable;
