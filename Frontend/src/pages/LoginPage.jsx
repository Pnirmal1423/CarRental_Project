import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Here you would send data to your backend
    alert(`Attempting to log in with ${email}.`);
  };

  return (
    <div className="login-container">
      <div className="card login-card p-4 p-md-5">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label form-label-login">Email address</label>
            <input
              type="email"
              className="form-control form-control-login"
              id="emailInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passwordInput" className="form-label form-label-login">Password</label>
            <input
              type="password"
              className="form-control form-control-login"
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary-custom btn-lg">Login</button>
            
            {/* The connection point */}
            <p className="text-center mt-3 mb-0 text-muted">
              Don't have an account? <Link to="/signup" className="text-decoration-none fw-bold">Sign Up Here</Link>
            </p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;