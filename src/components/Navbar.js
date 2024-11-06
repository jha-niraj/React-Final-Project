import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">ExpenseTracker</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/faqs">FAQs</Link>
                <Link to="/dashboard" className="dashboard-btn">Dashboard</Link>
            </div>
        </nav>
    );
}

export default Navbar;