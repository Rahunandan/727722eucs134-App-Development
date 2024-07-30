import React from 'react';
import { useAuth } from '../AuthContext';
// Import useAuth

const Profile = () => {
    const { user, logout } = useAuth(); // Get user and logout from context

    if (!user) {
        return <div>You are not logged in.</div>;
    }

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={logout} className="btn logout-btn">Logout</button>
        </div>
    );
};

export default Profile;
