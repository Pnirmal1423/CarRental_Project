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
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create data object to send to backend (do NOT send confirmPassword)
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    fetch("http://127.0.0.1:8000/api/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Server Response:", data);

        if (data.message) {
          alert("Registration Successful! Redirecting...");
          navigate('/login');
        } else {
          alert("Signup Failed. Check backend.");
        }
      })
      .catch(err => {
        console.log("Error:", err);
        alert("Server error, try again later.");
      });
  };

  return (
    <div className="login-container">
      <div className="card login-card p-4 p-md-5">
        <h2 className="text-center mb-4">Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label form-label-login">Full Name</label>
            <input
              type="text"
              className="form-control form-control-login"
              name="name"
              placeholder="Patel Ritesh"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label form-label-login">Email</label>
            <input
              type="email"
              className="form-control form-control-login"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label form-label-login">Phone Number</label>
            <input
              type="tel"
              className="form-control form-control-login"
              name="phone"
              placeholder="+91 99999 99999"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label form-label-login">Password</label>
            <input
              type="password"
              className="form-control form-control-login"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label form-label-login">Confirm Password</label>
            <input
              type="password"
              className="form-control form-control-login"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary-custom btn-lg">
              Sign Up
            </button>

            <p className="text-center mt-3 mb-0 text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
