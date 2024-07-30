import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>We are a leading event management platform dedicated to providing seamless and efficient solutions for corporate events.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@eventmanagement.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Event Management. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
