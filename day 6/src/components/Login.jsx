// Login.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login, registrationDetails } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
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
            const response = await axios.get(`http://localhost:8080/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                login(user);
                navigate('/'); // Redirect to HomePage
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
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
                <div className='signup-btn'>
                    <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
                    <div className='loginbtn'>
                        <button className="admin-toggle-btn" onClick={() => setIsAdmin(!isAdmin)}>
                            {isAdmin ? 'Login as User' : 'Login as Admin'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
