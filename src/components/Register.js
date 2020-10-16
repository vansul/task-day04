import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div id="register" className="container">
      <div className="window">
        <div className="overlay" />
        <div className="content">
          <div className="welcome">Register</div>
          <div className="input-fields">
            <input type="text" placeholder="Full Name" className="input-line full-width" />
            <input type="email" placeholder="Email" className="input-line full-width" />
            <input type="password" placeholder="Password" className="input-line full-width" />
            <input type="text" placeholder="DOB" className="input-line full-width" />
            <input type="number" placeholder="Mobile No." className="input-line full-width" />
          </div>
          <div>
            <button type="button" className="ghost-round full-width">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
