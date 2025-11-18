import React from 'react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Your Journey Starts Here</h1>
          <p className="lead mb-4">Rent your dream car with ease and confidence.</p>
          <a href="/booking" className="btn btn-primary-custom btn-lg px-4 py-2 shadow-lg">
            Book Cars Now
          </a>
        </div>
      </section>

      {/* About Section (Example) */}
      <section className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 display-5 fw-bold text-primary">Why Choose Patel's Cars?</h2>
            <p className="lead text-secondary">
              We offer a seamless car rental experience with a diverse fleet, transparent pricing, and exceptional customer service.
              From economical hatchbacks to luxurious SUVs, find the perfect ride for your adventure.
            </p>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card text-center p-3 border-0 shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-car-front-fill fs-1 text-success mb-3"></i> {/* Example icon */}
                    <h5 className="card-title fw-bold">Wide Selection</h5>
                    <p className="card-text text-muted">Choose from a variety of well-maintained vehicles.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center p-3 border-0 shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-currency-rupee fs-1 text-info mb-3"></i> {/* Example icon */}
                    <h5 className="card-title fw-bold">Best Prices</h5>
                    <p className="card-text text-muted">Competitive and transparent pricing, no hidden fees.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center p-3 border-0 shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-headset fs-1 text-warning mb-3"></i> {/* Example icon */}
                    <h5 className="card-title fw-bold">24/7 Support</h5>
                    <p className="card-text text-muted">Our dedicated team is always ready to assist you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include Bootstrap Icons for the example icons above. Add this to index.html <head> */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> */}
    </>
  );
};

export default HomePage;