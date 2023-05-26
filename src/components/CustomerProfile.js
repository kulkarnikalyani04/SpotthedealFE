import React, { useState } from 'react';
import './CustomerProfileForm.css';

const CustomerProfileForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phoneNo: '',
    age: '',
    gender: '',
    occupation: '',
    maritalStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(customer); // Replace with your actual form submission code
  };

  return (
    <div className="customer-profile-form">
      <h2>Create Customer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={customer.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={customer.email} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={customer.address} onChange={handleChange} />
        </label>
        <label>
          Phone number:
          <input type="number" name="phoneNo" value={customer.phoneNo} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={customer.age} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={customer.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Occupation:
          <input type="text" name="occupation" value={customer.occupation} onChange={handleChange} />
        </label>
        <label>
          Marital Status:
          <select name="maritalStatus" value={customer.maritalStatus} onChange={handleChange}>
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </label>
       
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CustomerProfileForm;
