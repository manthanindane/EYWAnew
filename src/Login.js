import React from 'react';
import './Login.css'
// import logo from './assets/logo.png'

const Login = () => {
  return (
    <div className='mainlogin'>
      {/* <img className="logo" src={logo} alt="EYWA logo" /> */}
      {/* <h2>EYWA Solutions Pvt.Ltd</h2> */}

      <form className='loginform'>
        <h2 className='loginhead'>Login </h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
        
         
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <a href="#forgotpassword"><p className='forgot'>Forgot Password</p></a>
      </form>
    </div>
  );
};

export default Login;
