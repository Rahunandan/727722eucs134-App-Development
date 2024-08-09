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
    { id: 1, name: "Conference Hall A", capacity: 300, price: 5000, imageUrl: "https://9c03a20c14919f6b45a1-2c1a2a4537ab7a0b67b56f8bdcba4d5e.ssl.cf2.rackcdn.com/2019/venue.JPG" },
    { id: 2, name: "Resort B", capacity: 50, price: 2000, imageUrl: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/03/18181031/kerala.jpg" },
    { id: 3, name: "Exhibition Center C", capacity: 100, price: 3000, imageUrl: "https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-metropolis-light-exhibition-center-ptarchitects-12.jpg" },
    { id: 4, name: "Banquet Hall D", capacity: 200, price: 4000, imageUrl: "https://sunnysworldpune.com/wp-content/uploads/2021/11/The-Kohinoor-Ac-Banquet-Hall-at-Sunnys-World-Pune-1.jpg" },
    { id: 5, name: "Open Ground E", capacity: 500, price: 7000, imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaqBhtdKcp2XiEg-OgnrFfayZT9vlMBRHlK-IZaVVJTZlrDbNaaMu7uzKNMgLPN_4aMmP_twhCaOwv9t_LScI2mUlapkTMiajNVNJfKAb-MUf25qSaBIHZEsHGuuehyxjtAap3-zQo9GZ7/s1600/%23open+ground++theme+decoration_theme+parties_birthday+decorations_event+organizers_balloon+decorations_birthday+party+supplies+(8).jpg" },
    { id: 6, name: "Theater F", capacity: 150, price: 3500, imageUrl: "https://eventupblog.tripleseat.com/hubfs/EventUp%20-%20Blog/UGA.%2C%20LLC%20dba%20Uptown%20Theater%20-%20Kansas%20City.jpg" },
    { id: 7, name: "Hotel G", capacity: 250, price: 6000, imageUrl: "https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/uploads/2015/11/peninsula-chicago-hero_0.jpg?itok=ELDhpEPs" },
    { id: 8, name: "Cruise ship H", capacity: 400, price: 10000, imageUrl: "https://www.happywedding.app/blog/wp-content/uploads/2019/08/All-about-a-wedding-on-a-Cruise-ship-1024x583.jpg" }
];

const EventCustomizationPage = () => {
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));
    const [bookings, setBookings] = useState([]);
    const [venue, setVenue] = useState(null);
    const [date, setDate] = useState('');
    const [customizations, setCustomizations] = useState('');
    const [requiredCapacity, setRequiredCapacity] = useState('');
    const [budget, setBudget] = useState('');
    const [error, setError] = useState('');

    const filteredVenues = venues.filter(venue => venue.capacity >= requiredCapacity);

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingBooking = bookings.find(booking => booking.venue === venue && booking.date === date);
        if (existingBooking) {
            setError('The selected venue is already booked on this date. Please choose another date or venue.');
            return;
        }

        const selectedVenue = venues.find(v => v.id === venue);
        if (!selectedVenue) {
            setError('Please select a valid venue.');
            return;
        }

        if (budget < selectedVenue.price) {
            setError(`The selected venue's price exceeds your budget. Please choose another venue or increase your budget.`);
            return;
        }

        const newBooking = { event: event.title, venue: selectedVenue.name, date, customizations, budget };
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
                <label htmlFor="requiredCapacity">Required Capacity:</label>
                <input
                    type="number"
                    id="requiredCapacity"
                    name="requiredCapacity"
                    onChange={(e) => setRequiredCapacity(Math.max(0, e.target.value))}
                    min="0"
                    required
                />

                <label>Choose Venue:</label>
                {filteredVenues.length > 0 ? (
                    <div className="venue-options">
                        {filteredVenues.map(venueOption => (
                            <div
                                key={venueOption.id}
                                className={`venue-option ${venue === venueOption.id ? 'selected' : ''}`}
                                onClick={() => setVenue(venueOption.id)}
                            >
                                <img src={venueOption.imageUrl} alt={venueOption.name} className="venue-image" />
                                <p>{venueOption.name}</p>
                                <p>Capacity: {venueOption.capacity}</p>
                                <p>Price: ${venueOption.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="error-message">No venues available with the required capacity.</p>
                )}

                <label htmlFor="date">Choose Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label htmlFor="customizations">Additional Customizations:</label>
                <textarea
                    id="customizations"
                    name="customizations"
                    value={customizations}
                    onChange={(e) => setCustomizations(e.target.value)}
                    placeholder="Describe your customizations..."
                    required
                ></textarea>

                <label htmlFor="budget">Budget:</label>
                <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Enter your budget"
                    required
                />

                {error && <p className="error-message">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventCustomizationPage;
