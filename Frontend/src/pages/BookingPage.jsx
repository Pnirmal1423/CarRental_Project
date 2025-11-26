import React, { useState } from "react";
import BookingModal from "../components/BookingModal";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  // ====== CAR LIST ======
  const [cars] = useState([
    {
      id: 1,
      name: "Maruti Suzuki Swift",
      type: "Hatchback",
      price: 2500,
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
      image: "https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
      seats: 5,
      fuel: "Diesel",
      transmission: "Automatic",
      description: "Experience comfort and style with this reliable and spacious SUV."
    },
    {
      id: 3,
      name: "Toyota Innova Crysta",
      type: "MUV",
      price: 6000,
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
      image: "https://cdn1.smartprix.com/rx-iRULdJ4JZ-w420-h420/mahindra-be-6.webp",
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      description: "Go green with India's best-selling electric SUV."
    }
  ]);

  // ====== STATE ======
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();

  // ====== SEARCH FILTER ======
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.fuel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.seats.toString().includes(searchTerm)
  );

  // ====== MODAL HANDLERS ======
  const handleBookClick = (car) => setSelectedCar(car);
  const handleCloseModal = () => setSelectedCar(null);

  const handleConfirmBooking = (bookingData) => {
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");

    // Save full car info inside booking
    const newBooking = {
      id: Date.now(),
      car: {
        id: selectedCar.id,
        name: selectedCar.name,
        type: selectedCar.type,
        image: selectedCar.image,
        seats: selectedCar.seats,
        fuel: selectedCar.fuel,
        transmission: selectedCar.transmission,
        price: selectedCar.price
      },
      status: "Confirmed",
      date: new Date().toLocaleDateString(),
      startDate: bookingData.startDate || "TBD",
      endDate: bookingData.endDate || "TBD",
      paymentMethod: bookingData.paymentMethod || "Cash",
      totalPrice: selectedCar.price
    };

    localStorage.setItem("bookings", JSON.stringify([...existing, newBooking]));
    alert("Booking Successful!");
    setSelectedCar(null);
    navigate("/history");
  };

  return (
    <div className="container py-5">
      {/* ====== SEARCH BAR ====== */}
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Search car by name, type, fuel, seats..."
          style={{ maxWidth: "700px", padding: "12px", borderRadius: "10px", fontSize: "1.1rem" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ====== HEADING ====== */}
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">Our Fleet</h2>

      {/* ====== CAR LIST ====== */}
      <div className="row">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="col-md-6 col-lg-4 mb-4" key={car.id}>
              <div className="card h-100 shadow-sm border-0">
                {/* IMAGE */}
                <div style={{ overflow: "hidden", height: "240px" }}>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", width: "100%", height: "100%", transition: "0.3s" }}
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>

                {/* DETAILS */}
                <div className="card-body d-flex flex-column bg-light">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">{car.name}</h5>
                    <span className="badge bg-primary">{car.type}</span>
                  </div>
                  <p className="small text-muted">{car.fuel} • {car.transmission} • {car.seats} Seats</p>
                  <p className="fst-italic small">"{car.description}"</p>
                  <div className="mt-auto pt-3 d-flex justify-content-between align-items-center border-top">
                    <span className="fs-4 fw-bold">₹{car.price}</span>
                    <button className="btn btn-primary" onClick={() => handleBookClick(car)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center text-danger mt-3">No cars found</h3>
        )}
      </div>

      {/* ====== BOOKING MODAL ====== */}
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
