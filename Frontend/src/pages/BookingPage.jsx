import React, { useState } from 'react';
import BookingModal from '../components/BookingModal'; // Import the Modal
import { useNavigate } from 'react-router-dom'; // Navigation after booking

const BookingPage = () => {
  // UPDATED CAR DATA WITH PREMIUM, MATCHING IMAGES
  const [cars] = useState([
    {
      id: 1,
      name: "Maruti Suzuki Swift",
      type: "Hatchback",
      price: 2500, 
      // Red Sporty Hatchback
      image: "https://www.cartoq.com/wp-content/uploads/2018/05/Swift-AMT-Review.jpg",
      seats: 4,
      fuel: "Petrol",
      transmission: "Manual",
      description: "A popular and fuel-efficient hatchback perfect for city commutes."
    },
    {
      id: 2,
      name: "Toyota Fortuner",
      type: "SUV",
      price: 4000,
      // Premium White/Silver Sedan
      image: "https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
      seats: 5,
      fuel: "Disel",
      transmission: "Automatic",
      description: "Experience comfort and style with this reliable and spacious sedan."
    },
    {
      id: 3,
      name: "Toyota Innova Crysta",
      type: "MUV",
      price: 6000,
      // Large Spacious 7-Seater
      image: "https://cdni.autocarindia.com/ExtraImages/20201015105617_2021-Toyota-Innova-Crysta-facelift-front-silver.jpg",
      seats: 7,
      fuel: "Diesel",
      transmission: "Manual",
      description: "Ideal for family trips and long journeys with ample space."
    },
    {
      id: 4,
      name: "Mahindra Thar",
      type: "SUV / Off-Road",
      price: 5500,
      // Rugged Black/Dark Jeep
      image: "https://cdni.autocarindia.com/ExtraImages/20250526035011_Mahindra_Thar_Roxx_showroom_1.jpg",
      seats: 4,
      fuel: "Diesel",
      transmission: "Manual",
      description: "Conquer any terrain with the iconic and rugged Mahindra Thar."
    },
    {
      id: 5,
      name: "Hyundai Creta",
      type: "Compact SUV",
      price: 4500,
      // Modern White SUV
      image: "https://cdn.motor1.com/images/mgl/BXOo7m/s1/hyundai-grand-creta.jpg",
      seats: 5,
      fuel: "Petrol",
      transmission: "Automatic",
      description: "A stylish and feature-rich SUV offering a smooth driving experience."
    },
    {
      id: 6,
      name: "Mahindra Be 6",
      type: "Electric SUV",
      price: 3500,
      // High-Tech Blue Electric SUV
      image: "https://cdn1.smartprix.com/rx-iRULdJ4JZ-w420-h420/mahindra-be-6.webp",
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      description: "Go green with India's best-selling electric SUV."
    }
  ]);

  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();

  // Handle opening the modal
  const handleBookClick = (car) => {
    setSelectedCar(car);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  // Handle booking confirmation
  const handleConfirmBooking = (bookingDetails) => {
    console.log("Booking Confirmed:", bookingDetails);
    
    // Save to local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = { 
      ...bookingDetails, 
      id: Date.now(), 
      status: 'Confirmed', 
      date: new Date().toLocaleDateString() 
    };
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

    alert("Booking Successful! Redirecting to history...");
    navigate('/history');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">Our Fleet</h2>
      
      <div className="row">
        {cars.map((car) => (
          <div className="col-md-6 col-lg-4 mb-4" key={car.id}>
            <div className="card h-100 shadow-sm car-card border-0">
              {/* Image Section */}
              <div style={{ overflow: 'hidden', height: '240px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                  <img 
                    src={car.image} 
                    className="card-img-top" 
                    alt={car.name} 
                    style={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Car+Image'}} 
                  />
              </div>
              
              {/* Details Section */}
              <div className="card-body d-flex flex-column bg-light">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold mb-0">{car.name}</h5>
                    <span className="badge bg-primary rounded-pill">{car.type}</span>
                </div>
                
                <p className="card-text text-muted mb-3 small">
                  <i className="bi bi-fuel-pump-fill text-danger me-1"></i> {car.fuel} &bull; 
                  <i className="bi bi-gear-fill text-secondary me-1 ms-2"></i> {car.transmission} &bull;
                  <i className="bi bi-people-fill text-info me-1 ms-2"></i> {car.seats}
                </p>
                
                <p className="card-text small text-secondary fst-italic mb-4">"{car.description}"</p>
                
                <div className="mt-auto pt-3 border-top border-secondary-subtle d-flex justify-content-between align-items-center">
                  <div>
                      <span className="d-block text-muted small text-uppercase fw-bold" style={{fontSize: '0.7rem'}}>Daily Rate</span>
                      <span className="fs-4 fw-bold text-dark">₹{car.price}</span>
                  </div>
                  <button 
                    className="btn btn-primary-custom px-4 py-2 shadow-sm fw-bold"
                    onClick={() => handleBookClick(car)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal if a car is selected */}
      <BookingModal 
        car={selectedCar} 
        show={!!selectedCar} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

export default BookingPage;