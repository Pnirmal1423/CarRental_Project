import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  // >>> Fetch Booking Data <<<
  const fetchBookings = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/admin-bookings/");
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>
      <h2>Car Booking Table</h2>

      <table
        border="1"
        cellPadding="10"
        style={{ 
          width: "100%", 
          borderCollapse: "collapse", 
          marginTop: "20px" 
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Car</th>
            <th>Start</th>
            <th>End</th>
            <th>Total Price</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Bookings Found
              </td>
            </tr>
          ) : (
            bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.user_name}</td>
                <td>{b.user_email}</td>
                <td>{b.car_name}</td>
                <td>{b.start_date}</td>
                <td>{b.end_date}</td>
                <td>₹{b.total_price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
