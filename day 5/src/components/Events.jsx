// src/components/Events.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Events.css';
import image from './assets/dg.jpg';
import { useAuth } from '../AuthContext'; // Import useAuth to access authentication state

const events = [
    { id: 1, title: "Annual Corporate Meeting", image: "https://www.ashevillechamber.org/wp-content/uploads/2019/02/AnnualMeeting2018_RyanBumgarner_163_marquee.jpg" },
    { id: 2, title: "Product Launch", image: "https://imgcdn.unilumin.com/media/upload/case/20201022/Compress_5.jpg" },
    { id: 3, title: "Workshop on Innovation", image },
    { id: 4, title: "Charity Gala", image: "https://www.astarexperience.com/wp-content/uploads/2023/06/decorated-wedding-hall-with-candles-round-tables-centerpieces-1024x0-c-center.jpg" },
    { id: 5, title: "Team Building Retreat", image: "https://d2w1le1t5r6d3w.cloudfront.net/images/courses/team-building-events/Half-Day.jpg" }
];

const Events = () => {
    const { isAuthenticated } = useAuth(); // Access the authentication state
    const navigate = useNavigate();

    const handleBookClick = (eventId) => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(`/events/customize/${eventId}`);
        }
    };

    return (
        <div className="events-container">
            <h1>Our Events</h1>
            
            {events.map(event => (
                <div key={event.id} className={`event ${event.id % 2 === 0 ? 'event-reverse' : ''}`}>
                    <img src={event.image} alt={event.title} className="event-image" />
                    <div className="event-description">
                        <h2>{event.title}</h2>
                        <p>{/* Event description goes here */}</p>
                        <button onClick={() => handleBookClick(event.id)} className="customize-button">Book</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;
