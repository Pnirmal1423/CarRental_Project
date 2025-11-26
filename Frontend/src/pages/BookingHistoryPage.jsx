import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch bookings and ensure car exists
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const cleanedBookings = storedBookings.map(b => ({
      ...b,
      car: b.car || {
        name: 'Unknown Car',
        type: 'N/A',
        image: 'https://placehold.co/60x40?text=Car',
        price: 0
      }
    }));
    setBookings(cleanedBookings.reverse()); // newest first
  }, []);

  const handleViewReceipt = (booking) => {
    navigate('/receipt', { state: { booking } });
  };

  return (
    <div className="container py-5" style={{ minHeight: '70vh' }}>
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
              {bookings.map((booking) => {
                const car = booking.car || {};
                return (
                  <tr key={booking.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={car.image || 'https://placehold.co/60x40?text=Car'}
                          alt={car.name || 'Car'}
                          className="rounded me-3"
                          style={{ width: '60px', height: '40px', objectFit: 'cover' }}
                        />
                        <div>
                          <div className="fw-bold">{car.name || 'Unknown Car'}</div>
                          <small className="text-muted">{car.type || 'N/A'}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <small className="d-block text-muted">From: {booking.startDate || 'TBD'}</small>
                      <small className="d-block text-muted">To: {booking.endDate || 'TBD'}</small>
                    </td>
                    <td className="fw-bold text-success">₹{booking.totalPrice || 0}</td>
                    <td>
                      <span className="badge bg-secondary text-uppercase">{booking.paymentMethod || 'N/A'}</span>
                    </td>
                    <td>
                      <span className="badge bg-success">{booking.status || 'Pending'}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleViewReceipt(booking)}
                      >
                        <i className="bi bi-receipt me-1"></i> Receipt
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingHistoryPage;
