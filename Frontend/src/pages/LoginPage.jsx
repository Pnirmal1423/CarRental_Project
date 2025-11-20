import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    alert(`Attempting to login with: ${email}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label form-label-login">
              Email address
            </label>
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

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="passwordInput"
              className="form-label form-label-login"
            >
              Password
            </label>
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

          {/* Submit button */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary-custom btn-lg">
              Login
            </button>

            <p className="text-center mt-3 mb-0 text-muted">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-decoration-none fw-bold">
                Sign Up Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
