import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../AuthContext'; // Import useAuth
import './AdminHomepage.css'; // Import the CSS file
import axios from 'axios'; // Import axios for making HTTP requests

const AdminHomepage = () => {
    const { logout } = useAuth(); // Get the logout function from context
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [orders, setOrders] = useState([]); // State to store orders
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(''); // State to handle errors

    useEffect(() => {
        // Fetch orders from the server or a context
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8080/orders'); // Adjust URL as necessary
                setOrders(response.data);
            } catch (err) {
                setError('Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/'); // Navigate to the homepage after logout
    };

    if (loading) return <p>Loading orders...</p>;

    return (
        <div className="admin-homepage">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <h1>Welcome, Admin!</h1>
            <p>This is the admin-specific homepage.</p>

            {error && <p className="error-message">{error}</p>}

            <h2>Orders Placed</h2>
            {orders.length > 0 ? (
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Event</th>
                            <th>Venue</th>
                            <th>Date</th>
                            <th>Customizations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.event}</td>
                                <td>{order.venue}</td>
                                <td>{order.date}</td>
                                <td>{order.customizations}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
};

export default AdminHomepage;
