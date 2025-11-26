import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/booking/all/");
        const data = res.data.reverse(); // newest first

        // Ensure car details always exist
        const cleaned = data.map((b) => ({
          ...b,
          car_details: b.car_details || {
            car_name: "Unknown Car",
            car_brand: "N/A",
            car_image: "https://placehold.co/60x40?text=Car",
            car_type: "N/A",
            price: 0,
          },
        }));

        setBookings(cleaned);
      } catch (error) {
        console.error("Error loading bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleViewReceipt = (booking) => {
    navigate("/receipt", { state: { booking } });
  };

  return (
    <div className="container py-5" style={{ minHeight: "70vh" }}>
      <h2 className="mb-4 border-start border-5 border-primary ps-3">
        My Booking History
      </h2>

      {bookings.length === 0 ? (
        <div className="alert alert-warning text-center p-5">
          <h4>No bookings found!</h4>
          <p>You haven't booked any cars yet.</p>
          <Link to="/booking" className="btn btn-primary mt-3">
            Find a Car
          </Link>
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
                const car = booking.car_details;

                return (
                  <tr key={booking.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={
                            car.car_image ||
                            "https://placehold.co/60x40?text=Car"
                          }
                          alt={car.car_name}
                          className="rounded me-3"
                          style={{
                            width: "60px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <div className="fw-bold">{car.car_name}</div>
                          <small className="text-muted">{car.car_type}</small>
                        </div>
                      </div>
                    </td>

                    <td>
                      <small className="d-block text-muted">
                        From: {booking.start_date}
                      </small>
                      <small className="d-block text-muted">
                        To: {booking.end_date}
                      </small>
                    </td>

                    <td className="fw-bold text-success">
                      ₹{booking.total_price}
                    </td>

                    <td>
                      <span className="badge bg-secondary text-uppercase">
                        {booking.payment_method}
                      </span>
                    </td>

                    <td>
                      <span className="badge bg-success">
                        {booking.status || "Confirmed"}
                      </span>
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
