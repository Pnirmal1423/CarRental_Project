import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // Initialize hook

  useEffect(() => {
    // Fetch bookings from local storage (Simulating backend)
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings.reverse()); // Show newest first
  }, []);

  // Handler to navigate to the receipt page, passing data via state
  const handleViewReceipt = (booking) => {
    navigate('/receipt', { state: { booking } });
  };

  return (
    <div className="container py-5" style={{minHeight: '70vh'}}>
      <h2 className="mb-4 border-start border-5 border-primary ps-3">My Booking History</h2>

      {bookings.length === 0 ? (
        <div className="alert alert-warning text-center p-5">
          <h4>No bookings found!</h4>
          <p>You haven't booked any cars yet.</p>
          <Link to="/booking" className="btn btn-primary mt-3">Find a Car</Link>
        </div>
      ) : (
        <div className="table-responsive shadow-sm rounded bg-white">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="py-3 ps-4">Car Details</th>
                <th>Dates</th>
                <th>Total Price</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center">
                      <img 
                        src={booking.car.image} 
                        alt={booking.car.name} 
                        className="rounded me-3" 
                        style={{width: '60px', height: '40px', objectFit: 'cover'}}
                        onError={(e) => {e.target.src = 'https://placehold.co/60x40?text=Car'}} 
                      />
                      <div>
                        <div className="fw-bold">{booking.car.name}</div>
                        <small className="text-muted">{booking.car.type}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <small className="d-block text-muted">From: {booking.startDate}</small>
                    <small className="d-block text-muted">To: {booking.endDate}</small>
                  </td>
                  <td className="fw-bold text-success">₹{booking.totalPrice}</td>
                  <td>
                    <span className="badge bg-secondary text-uppercase">{booking.paymentMethod}</span>
                  </td>
                  <td>
                    <span className="badge bg-success">{booking.status}</span>
                  </td>
                  <td>
                    <button 
                      className="btn btn-sm btn-outline-primary"
                      // **Connects to the receipt page**
                      onClick={() => handleViewReceipt(booking)} 
                    >
                      <i className="bi bi-receipt me-1"></i> Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingHistoryPage;