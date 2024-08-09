import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Profile.css';
const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();  // Initialize useNavigate

    const handleLogout = () => {
        logout();  // Call the logout function
        navigate('/');  // Redirect to the homepage
    };

    if (!user) {
        return <div>You are not logged in.</div>;
    }

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
