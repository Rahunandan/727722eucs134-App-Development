import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventCustomizationPage.css';

const events = [
    { id: 1, title: "Annual Corporate Meeting" },
    { id: 2, title: "Product Launch" },
    { id: 3, title: "Workshop on Innovation" },
    { id: 4, title: "Charity Gala" },
    { id: 5, title: "Team Building Retreat" }
];

const venues = [
    { id: 1, name: "Conference Hall A", capacity: 300 },
    { id: 2, name: "Resort B", capacity: 50 },
    { id: 3, name: "Exhibition Center C", capacity: 100 },
    { id: 4, name: "Banquet Hall D", capacity: 200 },
    { id: 5, name: "Open Ground E", capacity: 500 },
    { id: 6, name: "Theater F", capacity: 150 },
    { id: 7, name: "Hotel G", capacity: 250 }
];

const EventCustomizationPage = () => {
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));
    const [bookings, setBookings] = useState([]);
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState('');
    const [customizations, setCustomizations] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingBooking = bookings.find(booking => booking.venue === venue && booking.date === date);
        if (existingBooking) {
            setError('The selected venue is already booked on this date. Please choose another date or venue.');
            return;
        }

        const newBooking = { event: event.title, venue, date, customizations };
        setBookings([...bookings, newBooking]);
        setError('');
        alert('Booking successful!');
    };

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="customization-container">
            <h2>Customize Your {event.title}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="venue">Choose Venue:</label>
                <select id="venue" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required>
                    <option value="">Select a venue</option>
                    {venues.map(venue => (
                        <option key={venue.id} value={venue.id}>
                            {venue.name} (Capacity: {venue.capacity})
                        </option>
                    ))}
                </select>

                <label htmlFor="date">Choose Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label htmlFor="customizations">Additional Customizations:</label>
                <textarea id="customizations" name="customizations" value={customizations} onChange={(e) => setCustomizations(e.target.value)} placeholder="Describe your customizations..." required></textarea>

                {error && <p className="error-message">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventCustomizationPage;
