import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage'; 
import BookingHistoryPage from './pages/BookingHistoryPage'; 
import ReceiptPage from './pages/ReceiptPage';             

function App() {
  return (
    <Router>
      {/* Ensures the footer sticks to the bottom */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/booking" element={<BookingPage />} />
            
            {/* New Routes */}
            <Route path="/history" element={<BookingHistoryPage />} />
            <Route path="/receipt" element={<ReceiptPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;