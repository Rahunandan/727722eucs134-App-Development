// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Navigate to the homepage after logout
    };

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/events">Events</Link></li>
                {!isAuthenticated ? (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="btn-logout-btn">Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
