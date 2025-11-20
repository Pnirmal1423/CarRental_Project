import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignupPage.css";  // <-- IMPORTANT

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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

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
        if (data.message) {
          alert("Registration Successful!");
          navigate('/login');
        } else {
          alert("Signup Failed");
        }
      })
      .catch(err => {
        alert("Server error, try again later.");
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h2 className="text-center mb-4">Create Your Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@email.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Sign Up
          </button>

          <p className="text-center mt-3 text-white">
            Already have an account?{" "}
            <Link to="/login" className="login-link">Log In</Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default SignUpPage;
