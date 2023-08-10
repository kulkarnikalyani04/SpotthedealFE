import React, { useState } from 'react';
import './ProfileCreationPage.css'; 

const ProfileCreationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setgender] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderChange = (e) => {
   setgender(e.target.value);
 };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
      // Form validation
   if (!username || !dob || !phone) {
     setErrorMessage(alert('Please fill in all fields'));
     return;
   }
    console.log('Profile saved!');
    alert('Profile saved successfully!');
  };

  return (
    <div className="profile-creation-page">
      <h1 className="page-title">Lets setup your Profile ! </h1>

      {/* Profile Picture Upload */}
     <div>
        <label>Profile Picture</label>
        <input type="file" accept="image/*" />
      </div> 

      {/* Profile Information Form */}
      <form onSubmit={handleProfileSave}>
      <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <label>
           Gender:
           <select className='selectGender' htmlFor="gender" value={gender} onChange={handleGenderChange}>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
           </select>
           </label>


        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" value={dob} onChange={handleDobChange} />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <div className="subBut">
        <button type="submit" className="save-btn">Save</button>
        </div>

      
      </form>

    </div>
  );
};

export default ProfileCreationPage;
