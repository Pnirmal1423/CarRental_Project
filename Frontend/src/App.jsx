import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import BookingHistoryPage from "./pages/BookingHistoryPage";
import ReceiptPage from "./pages/ReceiptPage";
import SignUpPage from "./pages/SignUpPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/history" element={<BookingHistoryPage />} />
            <Route path="/receipt" element={<ReceiptPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
