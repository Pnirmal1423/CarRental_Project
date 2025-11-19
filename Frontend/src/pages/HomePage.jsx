import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Inline CSS for sections */}
      <style>
        {`
        /* HERO SECTION */
        .hero-section {
          height: 550px;
          background-image: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
          color: white;
          margin: 0;
          padding: 0;
        }

        .btn-primary-custom {
          background-color: #0d6efd;
          border: none;
          border-radius: 8px;
        }

        .btn-primary-custom:hover {
          background-color: #0956c7;
        }

        /* CHOOSE SECTION */
        .choose-section {
          padding: 80px 20px 60px 20px;
          text-align: center;
          background: linear-gradient(135deg, #0a0f24, #1a2d52);
          color: white;
          position: relative;
          overflow: hidden;

          /* FIX WHITE LINE */
          margin: 0;
        }

        /* Glow effect circles */
        .choose-section::before,
        .choose-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.45;
        }

        .choose-section::before {
          width: 280px;
          height: 280px;
          background: #4a90e2;
          top: -40px;
          left: -80px;
        }

        .choose-section::after {
          width: 300px;
          height: 300px;
          background: #ff6b81;
          bottom: -70px;
          right: -90px;
        }

        .choose-title {
          font-size: 2.6rem;
          font-weight: bold;
          color: #4da3ff;
        }

        .choose-subtitle {
          color: #d7e4ff;
          font-size: 1.2rem;
          max-width: 700px;
          margin: auto;
          margin-bottom: 40px;
        }

        .choose-cards {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .choose-card {
          width: 280px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
          transition: 0.3s ease-in-out;
        }

        .choose-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .choose-card h3 {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .choose-card p {
          font-size: 0.95rem;
          color: #e0e6ff;
        }
      `}
      </style>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">Your Journey Starts Here</h1>
          <p className="lead mb-4">Rent your dream car with ease and confidence.</p>
          <a href="/booking" className="btn btn-primary-custom btn-lg px-4 py-2 shadow-lg">
            Book Cars Now
          </a>
        </div>
      </section>

      {/* CHOOSE SECTION */}
      <section className="choose-section">
        <h2 className="choose-title">Why Choose Patel's Cars?</h2>
        <p className="choose-subtitle">
          We offer a seamless car rental experience with a diverse fleet, transparent pricing, 
          and exceptional customer service.
        </p>

        <div className="choose-cards">
          <div className="choose-card">
            <h3>Wide Selection</h3>
            <p>Choose from a variety of well-maintained vehicles.</p>
          </div>

          <div className="choose-card">
            <h3>Best Prices</h3>
            <p>Transparent pricing, no hidden fees.</p>
          </div>

          <div className="choose-card">
            <h3>24/7 Support</h3>
            <p>Our team is always ready to assist.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
