import React, { useState } from 'react';
import './OrderSummaryForm.css';

const OrderSummaryForm = () => {
  const [couponCode, setCouponCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic here

    // Show alert box with payment success message
    alert('Payment Successfully!');
  };

  return (
    <div className="order-summary-form">
      <h2>Order Summary</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date and Time:</label>
          <input type="text" value={new Date().toLocaleString()} disabled />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea rows="3" placeholder="Enter your address" required />
        </div>
        <div className="form-group">
          <label>Save extra with coupon:</label>
          <input type="text" value={couponCode} onChange={handleCouponChange} />
        </div>
        <div className="form-group">
          <label>Payment options:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="payNow"
                checked={paymentMethod === 'payNow'}
                onChange={handlePaymentMethodChange}
                required
              />
              Pay now
            </label>
            <label>
              <input
                type="radio"
                value="payOnService"
                checked={paymentMethod === 'payOnService'}
                onChange={handlePaymentMethodChange}
                required
              />
              Pay on Service
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subtotal:</label>
          <input type="text" value={`$${(quantity * 99.99).toFixed(2)}`} disabled />
        </div>
        <div className="form-group">
          <label>Visiting charges:</label>
          <input type="text" value="$9.99" disabled />
        </div>
        <div className="form-group">
          <label>Total:</label>
          <input
            type="text"
            value={`$${(quantity * 99.99 + 9.99).toFixed(2)}`}
            disabled
          />
        </div>
        <div className="form-group">
         <center> <button type="submit">Make Payment</button></center>
        </div>
      </form>
    </div>
  );
};

export default OrderSummaryForm;
