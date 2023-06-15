import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handleCancel = () => {
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='RegistrationForm'>
    {!submitted ? (
        <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="name">Middle Name:</label>
          <input
            type="text"
            id="name"
            value={MiddleName}
            onChange={(e) => setMiddleName(e.target.value)}
            required
          />
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <br/>
          <label htmlFor="email">Email:</label>
          <input
            type="Text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br/>
            <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="email"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <br/>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br/>
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>     <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div>
          <h2>Thank You!😊 {FirstName}</h2>
          <h3>Your registration has been successful</h3>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
