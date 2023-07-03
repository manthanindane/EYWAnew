import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isHRLogin, setIsHRLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform login validation
    try {
      let url = 'http://localhost:8000/api/login';
      if (isHRLogin) {
        url = 'http://localhost:8000/api/hrlogin';
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Login successful
        console.log('Login successful');
        console.log('User Name:', data.name);
        window.location.href = '/Dashboard';
      } else {
        // Login failed
        window.alert('Invalid login details');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleToggleLogin = () => {
    setIsHRLogin((prev) => !prev);
  };

  return (
    <div className='mainlogin'>
      <form className='loginform' onSubmit={handleSubmit}>
        <h2 className='loginhead'>Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isHRLogin ? 'HR Login' : 'Employee Login'}
        </button>
        <p className='toggle-login' onClick={handleToggleLogin}>
          {isHRLogin ? 'Switch to Employee Login' : 'Switch to HR Login'}
        </p>
      </form>
    </div>
  );
};

export default Login;
