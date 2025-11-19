import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. IMPORT CORE COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. IMPORT CUSTOMER PAGES
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage'; 
import BookingHistoryPage from './pages/BookingHistoryPage'; 
import ReceiptPage from './pages/ReceiptPage'; 

// 3. IMPORT NEW USER/ADMIN PAGES
import SignUpPage from './pages/SignUpPage';         // The new registration page
import AdminDashboard from './pages/AdminDashboard'; // The new admin layout

function App() {
  return (
    <Router>
      {/* Ensures the footer sticks to the bottom */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            {/* PUBLIC & CORE CUSTOMER ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            
            {/* USER AUTHENTICATION ROUTES */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} /> 

            {/* BOOKING WORKFLOW ROUTES */}
            <Route path="/history" element={<BookingHistoryPage />} />
            <Route path="/receipt" element={<ReceiptPage />} />
            
            {/* ADMIN ROUTE (For management access) */}
            <Route path="/admin" element={<AdminDashboard />} /> 
            
          </Routes>
        </main>
        <Footer />
      </div>
 </Router>
 );
}

export default App;