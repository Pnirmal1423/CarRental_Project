import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminOverview />;
      case 'inventory':
        return <CarInventoryManager />;
      case 'bookings':
        return <BookingApprovals />;
      case 'reports':
        return <RevenueReports />;
      case 'staff':
        return <StaffUserManager />;
      default:
        return <AdminOverview />;
    }
  };

  const SidebarItem = ({ tab, icon, label }) => (
    <li className="nav-item">
      <a
        className={`nav-link text-white ${activeTab === tab ? 'bg-secondary' : ''}`}
        onClick={() => setActiveTab(tab)}
        style={{ cursor: 'pointer' }}
      >
        <i className={`bi bi-${icon} me-2`}></i>
        {label}
      </a>
    </li>
  );

  return (
    <div className="d-flex" style={{ minHeight: '92vh' }}>
      {/* Sidebar Navigation */}
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px' }}>
        <h5 className="mb-4 text-primary fw-bold border-bottom pb-2">Admin Panel</h5>
        <ul className="nav nav-pills flex-column mb-auto">
          <SidebarItem tab="dashboard" icon="speedometer2" label="Overview" />
          <SidebarItem tab="inventory" icon="car-front-fill" label="Car Inventory" />
          <SidebarItem tab="bookings" icon="calendar-check" label="Booking Approvals" />
          <SidebarItem tab="reports" icon="graph-up" label="Analytics & Reports" />
          <SidebarItem tab="staff" icon="people-fill" label="Users & Staff" />
        </ul>
        <div className="dropdown border-top pt-3">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1">
            <img src="https://placehold.co/32x32/white/blue?text=A" alt="Admin" width="32" height="32" className="rounded-circle me-2" />
            <strong>Patel Admin</strong>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4 bg-light">
        <h1 className="mb-4 border-bottom pb-2 text-secondary">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
        {renderContent()}
      </div>
    </div>
  );
};

// --- Sub-Components (Simplified Mockups) ---

const AdminOverview = () => (
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card text-white bg-primary shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Total Revenue (INR)</h5>
          <p className="card-text display-4 fw-bold">₹2,85,000</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card text-white bg-success shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Active Rentals</h5>
          <p className="card-text display-4 fw-bold">12</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card text-white bg-info shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Available Cars</h5>
          <p className="card-text display-4 fw-bold">24</p>
        </div>
      </div>
    </div>
    {/* Placeholder for charts/graphs  */}
  </div>
);

const CarInventoryManager = () => (
  <>
    <button className="btn btn-primary-custom mb-3">
      <i className="bi bi-plus-lg me-2"></i> Add New Car
    </button>
    <p className="text-muted">Table of all 50 cars, allowing edit/delete/pricing updates (Django integration required).</p>
    <div className="alert alert-secondary">
        Mock Inventory Table goes here. (e.g., Car Name, Price/Day, Status: Available/Maintenance)
    </div>
  </>
);

const BookingApprovals = () => (
  <>
    <h4 className="text-warning">Pending Bookings (3)</h4>
    <p className="text-muted">List of new bookings awaiting administrator approval.</p>
    <div className="alert alert-warning">
        Mock Approval List with 'Approve' and 'Cancel' buttons goes here.
    </div>
  </>
);

const RevenueReports = () => (
  <>
    <h4 className="text-success">Monthly Revenue Analysis</h4>
    <p className="text-muted">Generate reports on revenue, most rented cars, and user activity.</p>
    <div className="alert alert-info">
        Mock Downloadable Report Generator interface.
    </div>
  </>
);

const StaffUserManager = () => (
  <>
    <h4 className="text-info">User Management</h4>
    <p className="text-muted">Manage customer and staff accounts, permissions, and status.</p>
    <div className="alert alert-primary">
        Mock User Table with 'Edit' and 'Block' actions.
    </div>
  </>
);

export default AdminDashboard;