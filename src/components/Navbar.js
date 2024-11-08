import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <Link to="/">
                    <h1>SmartFinance</h1>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="link">
                    Home
                </Link>
                <div
                    className={`dropdown ${dropdownOpen ? 'open' : ''}`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <Link to="/features" className="link dropdown-toggle">
                        Features <ChevronDown size={16} />
                    </Link>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/expense-tracker" className="dropdown-item">
                                Expense Tracker
                            </Link>
                            <Link to="/currency-exchange" className="dropdown-item">
                                Currency Exchange
                            </Link>
                            <Link to="/bill-reminders" className="dropdown-item">
                                Bills Management
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/faqs" className="link">
                    FAQs
                </Link>
                <Link to="/dashboard" className="link dashboard-btn">
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;