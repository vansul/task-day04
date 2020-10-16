import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div id="login" className="container">
      <div className="window">
        <div className="login-overlay">
          <div className="content">
            <div className="welcome">Login</div>
            <div className="input-fields">
              <input type="email" placeholder="Email" className="input-line full-width" />
              <input type="password" placeholder="Password" className="input-line full-width" />
            </div>
            <div>
              <button type="button" className="ghost-round full-width">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
