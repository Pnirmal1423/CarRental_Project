import React, { useState, useEffect } from 'react';

const BookingModal = ({ car, show, onClose, onConfirm }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // NEW FIELDS
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Calculate Total Price
  useEffect(() => {
    if (startDate && endDate && car) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diff = (end - start) / (1000 * 3600 * 24);

      setTotalPrice(diff > 0 ? diff * car.price : 0);
    }
  }, [startDate, endDate, car]);

  if (!show || !car) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Booking: {car.name}</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="row">
              
              {/* LEFT SIDE */}
              <div className="col-md-6 border-end">
                <img src={car.image} alt={car.name} className="img-fluid rounded mb-3" />
                <h5>{car.name}</h5>
                <p className="text-muted">{car.type} | {car.fuel}</p>
                <h4 className="text-success">₹{car.price} / day</h4>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="col-md-6">
                <form>

                  {/* FULL NAME */}
                  <div className="mb-2">
                    <label className="form-label fw-bold">Full Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="mb-2">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* ADDRESS */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Address</label>
                    <textarea
                      rows="2"
                      className="form-control"
                      placeholder="Enter full address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>

                  {/* DATES */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Pickup Date</label>
                    <input type="date" className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Return Date</label>
                    <input type="date" className="form-control"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  {/* PRICE */}
                  <div className="alert alert-info py-2">
                    <div className="d-flex justify-content-between">
                      <strong>Total Days:</strong>
                      <span>{totalPrice > 0 ? totalPrice / car.price : 0}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <strong>Total Price:</strong>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>

            <button 
              className="btn btn-primary"
              disabled={totalPrice <= 0}
              onClick={() => onConfirm({ 
                car,
                startDate, 
                endDate, 
                totalPrice, 
                paymentMethod,
                name,
                phone,
                address
              })}
            >
              Confirm Booking ₹{totalPrice}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;
