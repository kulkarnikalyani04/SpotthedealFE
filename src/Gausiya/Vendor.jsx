import React, { useState } from 'react';
import './vendor.css'

const VendorOnboardingForm = () => {
    const [vendorLogo, setVendorLogo] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorAddress, setVendorAddress] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const[vendorOraganisation,setVendorOrganisation]=useState('')
  const [vendorGST, setVendorGST] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to an API or handle it as needed
    console.log('vendorLogo:',vendorLogo)
    console.log('Vendor Name:', vendorName);
    console.log('Vendor Email:', vendorEmail);
    console.log('Vendor Address:', vendorAddress);
    console.log('Vendor Phone:', vendorPhone);
    console.log('Organization Name:',vendorOraganisation)
    console.log('vendorGST:',vendorGST)
  };

  return (<div className='vendorForm'>

    <form onSubmit={handleSubmit}>
    {/* <div>
        <label htmlFor="vendorLogo">Vendor Logo</label>
        <input
          type="tel"
          id="vendorLogo"
          value={vendorLogo}
          onChange={(e) => setVendorLogo(e.target.value)}
          placeholder={"⬆ Upload"}
        />
      </div> */}
      <div>
        <label htmlFor="vendorName">Vendor Name</label>
        <input
          type="text"
          id="vendorName"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          placeholder={"Enter your Name"}
        />
      </div>
      <div>
        <label htmlFor="vendorEmail">Vendor Email</label>
        <input
          type="email"
          id="vendorEmail"
          value={vendorEmail}
          onChange={(e) => setVendorEmail(e.target.value)}
          placeholder={"Enter your email ID"}
        />
      </div>
      <div>
        <label htmlFor="vendorAddress">Vendor Address</label>
        <textarea
          id="vendorAddress"
          value={vendorAddress}
          onChange={(e) => setVendorAddress(e.target.value)}
          placeholder={"Enter your permanant Address"}
        ></textarea>
      </div>
      <div>
        <label htmlFor="vendorPhone">Vendor Phone</label>
        <input
          type="tel"
          id="vendorPhone"
          value={vendorPhone}
          onChange={(e) => setVendorPhone(e.target.value)}
          placeholder={"Enter your valid Phone Number"}
        />
      </div>
      <div>
        <label htmlFor="vendorOrganisation">Organization Name</label>
        <input
          type="tel"
          id="vendorOrgaisation"
          value={vendorOraganisation}
          onChange={(e) => setVendorOrganisation(e.target.value)}
          placeholder={"Enter your Organization Name"}
        />
      </div>
      <div>
        <label htmlFor="vendorGST">GST Number </label>
        <input
          type="tel"
          id="vendorGST"
          value={vendorGST}
          onChange={(e) => setVendorGST(e.target.value)}
          placeholder={"Enter your GST Number"}
        />
      </div>
      
      <button type="submit1">Submit</button>
      <button type="submit2">Cancel</button>
    </form>
    </div>
  );
};

export default VendorOnboardingForm;
