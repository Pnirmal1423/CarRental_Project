import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // In a real application, send formData to the Django backend for registration
    console.log("Signing up user:", formData);
    alert(`Registration successful for ${formData.name}! Redirecting to Login.`);
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="card login-card p-4 p-md-5">
        <h2 className="text-center mb-4">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label form-label-login">Full Name</label>
            <input
              type="text"
              className="form-control form-control-login"
              id="nameInput"
              name="name"
              placeholder="Patel Ritesh"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label form-label-login">Email</label>
            <input
              type="email"
              className="form-control form-control-login"
              id="emailInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label form-label-login">Phone Number (Required for Bookings)</label>
            <input
              type="tel"
              className="form-control form-control-login"
              id="phoneInput"
              name="phone"
              placeholder="+91 99999 99999"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label form-label-login">Password</label>
            <input
              type="password"
              className="form-control form-control-login"
              id="passwordInput"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPasswordInput" className="form-label form-label-login">Confirm Password</label>
            <input
              type="password"
              className="form-control form-control-login"
              id="confirmPasswordInput"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary-custom btn-lg">Sign Up</button>
            <p className="text-center mt-3 mb-0 text-muted">
              Already have an account? <Link to="/login" className="text-decoration-none">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;