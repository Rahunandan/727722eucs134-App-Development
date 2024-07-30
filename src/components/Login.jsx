import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import useAuth for managing auth state

const Login = () => {
    const { login, registrationDetails } = useAuth(); // Use auth context to manage authentication state and get registration details
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // State to differentiate user and admin login
    const navigate = useNavigate();

    useEffect(() => {
        if (registrationDetails.email && registrationDetails.password) {
            setEmail(registrationDetails.email);
            setPassword(registrationDetails.password);
        }
    }, [registrationDetails]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send login request to the server
            const response = await axios.get(`http://localhost:8080/${isAdmin ? 'admins' : 'users'}?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                // If login is successful, update authentication state and navigate to the appropriate home page
                login(response.data[0]); // Pass the user info to the login function
                navigate(isAdmin ? '/admin-homepage' : '/');
            } else {
                // Handle login failure (e.g., show an error message)
                alert('Invalid email or password');
            }
        } catch (error) {
            // Handle server or network errors
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>{isAdmin ? 'Admin Login' : 'Login to Your Account'}</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn login-btn">Login</button>
            </form>
            <div className="form-footer">
                <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
                <button className="btn admin-toggle-btn" onClick={() => setIsAdmin(!isAdmin)}>
                    {isAdmin ? 'Login as User' : 'Login as Admin'}
                </button>
            </div>
        </div>
    );
};

export default Login;
