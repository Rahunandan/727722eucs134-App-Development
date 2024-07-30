import React, { createContext, useContext, useState } from 'react';

// Create a new context for authentication
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the app and provide auth state
export const AuthProvider = ({ children }) => {
    // State variables to track authentication status, user info, and registration details
    const [user, setUser] = useState(null);
    const [registrationDetails, setRegistrationDetails] = useState({
        email: '',
        password: ''
    });

    // Function to handle login, setting the user info and updating the authentication state
    const login = (userInfo) => {
        setUser(userInfo);
    };

    // Function to handle logout, resetting the user info, registration details, and authentication state
    const logout = () => {
        setUser(null);
        setRegistrationDetails({ email: '', password: '' });
    };

    // Provide the authentication state and functions to the context
    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, registrationDetails, setRegistrationDetails }}>
            {children}
        </AuthContext.Provider>
    );
};
