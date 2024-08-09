import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { useAuth } from '../AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const { setRegistrationDetails } = useAuth(); // Get the function to set registration details

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userType = isAdmin ? 'admin' : 'user';
        try {
            await axios.post('http://localhost:8080/users', { username, email, password, userType });
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('UserType:', userType);

            // Save registration details in context
            setRegistrationDetails({ email, password });
            navigate('/login');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="register-container">
            <h2>{isAdmin ? 'Admin Register' : 'Register'}</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn register-btn">Register</button>
            </form>
            <div className="form-footer">
                <div className="form-footer-content">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                    <button className="btn admin-toggle-btn" onClick={() => setIsAdmin(!isAdmin)}>
                        {isAdmin ? 'Sign up as User' : 'Sign up as Admin'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
