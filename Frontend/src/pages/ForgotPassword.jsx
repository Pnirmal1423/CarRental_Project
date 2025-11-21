import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Call your backend API here  
    console.log("Password reset email sent to:", email);

    setMessage("Password reset link sent to your email!");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="text-center mb-4">Forgot Password</h2>

        {message && <p className="text-success text-center">{message}</p>}

        <form onSubmit={handleSubmit}>
          <label className="form-label">Enter your email</label>
          <input
            type="email"
            className="form-control form-control-login"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary-custom btn-lg w-100 mt-3">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
