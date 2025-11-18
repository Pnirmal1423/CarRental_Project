import React, { useState, useEffect } from 'react';

const BookingModal = ({ car, show, onClose, onConfirm }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Calculate Total Price whenever dates change
  useEffect(() => {
    if (startDate && endDate && car) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end - start;
      const days = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days

      if (days > 0) {
        setTotalPrice(days * car.price);
      } else {
        setTotalPrice(0);
      }
    }
  }, [startDate, endDate, car]);

  if (!show || !car) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          
          {/* Header */}
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Booking: {car.name}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="row">
              {/* Left Column: Car Details */}
              <div className="col-md-6 border-end">
                <img src={car.image} alt={car.name} className="img-fluid rounded mb-3" />
                <h5>{car.name}</h5>
                <p className="text-muted">{car.type} | {car.fuel}</p>
                <h4 className="text-success">₹{car.price} <small className="fs-6 text-muted">/ day</small></h4>
              </div>

              {/* Right Column: Booking Form */}
              <div className="col-md-6">
                <form>
                  {/* Date Selection */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Pickup Date</label>
                    <input type="date" className="form-control" 
                      value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Return Date</label>
                    <input type="date" className="form-control" 
                      value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>

                  {/* Total Price Display */}
                  <div className="alert alert-info py-2">
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total Days:</span>
                      <span>{totalPrice > 0 ? totalPrice / car.price : 0} Days</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold fs-5 mt-1">
                      <span>Total Amount:</span>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Payment Method</label>
                    <div className="d-flex gap-2">
                      <div className={`card p-2 flex-fill text-center cursor-pointer ${paymentMethod === 'upi' ? 'border-primary bg-light' : ''}`}
                           onClick={() => setPaymentMethod('upi')} style={{cursor: 'pointer'}}>
                        <i className="bi bi-qr-code-scan fs-4 text-success"></i>
                        <div className="small">UPI</div>
                      </div>
                      <div className={`card p-2 flex-fill text-center cursor-pointer ${paymentMethod === 'card' ? 'border-primary bg-light' : ''}`}
                           onClick={() => setPaymentMethod('card')} style={{cursor: 'pointer'}}>
                        <i className="bi bi-credit-card fs-4 text-primary"></i>
                        <div className="small">Card</div>
                      </div>
                      <div className={`card p-2 flex-fill text-center cursor-pointer ${paymentMethod === 'cash' ? 'border-primary bg-light' : ''}`}
                           onClick={() => setPaymentMethod('cash')} style={{cursor: 'pointer'}}>
                        <i className="bi bi-cash-coin fs-4 text-warning"></i>
                        <div className="small">Cash</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary-custom" 
              disabled={totalPrice <= 0} 
              onClick={() => onConfirm({ car, startDate, endDate, totalPrice, paymentMethod })}>
              Confirm & Pay ₹{totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;