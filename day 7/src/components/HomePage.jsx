import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../components/assets/logo1.png';
const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/events');
    };

    return (
        <div className="home-container">
            <header className="hero-section">
                <img src={logo} alt="Indus Group Logo" className="logo" /> {/* Logo */}

                <button className="cta-button" style={{ marginTop: '20px' }} onClick={handleGetStarted}>Get Started</button>
            </header>
            <section className="featured-events">
                <h2>Featured Events</h2>
                <div className="events-grid">
                    <div className="event-card">
                        <h3>Annual Conference 2024</h3>
                        <p>Join industry leaders and professionals at our Annual Conference.</p>
                    </div>
                    <div className="event-card">
                        <h3>Corporate Retreat</h3>
                        <p>Relax and rejuvenate with our exclusive corporate retreat.</p>
                    </div>
                    <div className="event-card">
                        <h3>Product Launch</h3>
                        <p>Be the first to see our latest innovations at our product launch event.</p>
                    </div>
                </div>
            </section>
            <section className="upcoming-events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Webinar on Corporate Strategy - August 15, 2024</li>
                    <li>Team Building Workshop - September 10, 2024</li>
                    <li>Year-End Gala - December 20, 2024</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-card">
                    <p>"This platform has transformed how we manage our corporate events. Highly recommend!"</p>
                    <p>- Jane Doe, CEO of ABC Corp</p>
                </div>
                <div className="testimonial-card">
                    <p>"An excellent tool for organizing and promoting our events. It's a game changer!"</p>
                    <p>- John Smith, Event Manager at XYZ Ltd</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
