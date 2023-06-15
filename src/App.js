import React from "react";
import CustomerProfileForm from "./components/CustomerProfile";
import RegistrationForm from "./shivani/RegistrationForm";
import InterestPage from "./Rashmi/InterestPage.js";
import ProductDetailsPage from "./ProductDetails/ProductDetailsPage";
import  VendorOnboardingForm from './Gausiya/Vendor';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Customer Profile</Link>
            </li>
            <li>
              <Link to="/registrationForm">Registration Form </Link>
            </li>
            <li>
              <Link to="/interestForm"> Interest Form</Link>
            </li>
            <li>
              <Link to="/productDetailsPage">  ProductDetailsPage</Link>
            </li>
            <li>
              <Link to="/VendorOnboardingForm">  VendorOnboarding Form</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<CustomerProfileForm />}></Route>
            <Route
              exact
              path="/registrationForm"
              element={<RegistrationForm />}
            ></Route>
            <Route
              exact
              path="/interestForm"
              element={
                <InterestPage />
              }
            ></Route>
            <Route
              exact
              path="/productDetailsPage"
              element={<ProductDetailsPage />}
            ></Route>
            <Route
              exact
              path="/VendorOnboardingForm"
              element={<VendorOnboardingForm />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

