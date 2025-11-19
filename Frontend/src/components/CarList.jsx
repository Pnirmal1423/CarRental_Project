import { useEffect, useState } from "react";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cars/")
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <h3>{car.car_name}</h3>
          <p>{car.car_brand}</p>
          <p>{car.price_per_day} ₹ / day</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
