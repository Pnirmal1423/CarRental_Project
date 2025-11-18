import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReceiptPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve the booking data passed from History page
  const booking = location.state?.booking;

  // Handle case where data is missing (e.g., page refresh)
  useEffect(() => {
    if (!booking) {
      console.error("Receipt data not found.");
      navigate('/history');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  // Function to trigger browser print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          
          {/* Invoice Card */}
          <div className="card shadow-lg border-0" id="print-section">
            <div className="card-body p-5">
              
              {/* Header: Company Info */}
              <div className="d-flex justify-content-between align-items-start border-bottom pb-4 mb-4">
                <div>
                  <h2 className="fw-bold text-primary">Patel's Cars</h2>
                  <p className="text-muted mb-0">123, Auto Market Road</p>
                  <p className="text-muted mb-0">Ahmedabad, Gujarat, 380001</p>
                </div>
                <div className="text-end">
                  <h1 className="display-6 fw-bold text-secondary">RECEIPT</h1>
                  <p className="fw-bold mb-0">Receipt #: <span className="fw-normal">INV-{booking.id}</span></p>
                  <p className="fw-bold">Date: <span className="fw-normal">{booking.date}</span></p>
                </div>
              </div>

              {/* Section: Customer & Booking Info */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5 className="fw-bold">Bill To:</h5>
                  <p className="mb-0">Valued Customer</p>
                  <p className="mb-0">Mode: <span className="text-uppercase">{booking.paymentMethod}</span></p>
                  <p className="text-success fw-bold">Status: Paid</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <h5 className="fw-bold">Rental Period:</h5>
                  <p className="mb-0">Pickup: {booking.startDate}</p>
                  <p className="mb-0">Return: {booking.endDate}</p>
                </div>
              </div>

              {/* Section: Car Details Table */}
              <div className="table-responsive mb-4">
                <table className="table table-bordered border-light">
                  <thead className="bg-light text-secondary">
                    <tr>
                      <th>Description</th>
                      <th className="text-end">Rate (Per Day)</th>
                      <th className="text-end">Days</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="fw-bold">{booking.car.name}</span>
                        <br />
                        <small className="text-muted">{booking.car.type} - {booking.car.fuel}</small>
                      </td>
                      <td className="text-end">₹{booking.car.price}</td>
                      <td className="text-end">
                        {/* Calculate days again */}
                        {booking.totalPrice / booking.car.price}
                      </td>
                      <td className="text-end">₹{booking.totalPrice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section: Totals */}
              <div className="row justify-content-end mb-5">
                <div className="col-md-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹{booking.totalPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-muted">
                    <span>Taxes (Included):</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="d-flex justify-content-between border-top border-dark pt-2">
                    <h4 className="fw-bold">Total Paid:</h4>
                    <h4 className="fw-bold text-success">₹{booking.totalPrice}</h4>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-top pt-4 text-center text-muted">
                <p className="mb-1">Thank you for choosing Patel's Cars!</p>
              </div>

            </div>
          </div>

          {/* Action Buttons (d-print-none ensures this button is hidden when printing) */}
          <div className="d-flex justify-content-between mt-4 d-print-none">
            <button className="btn btn-outline-secondary" onClick={() => navigate('/history')}>
              &larr; Back to History
            </button>
            <button className="btn btn-primary-custom px-4" onClick={handlePrint}>
              <i className="bi bi-printer-fill me-2"></i> Print / Download PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;