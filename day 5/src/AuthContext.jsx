// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a new context for authentication
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the app and provide auth state
export const AuthProvider = ({ children }) => {
    // State variables to track authentication status and user info
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [registrationDetails, setRegistrationDetails] = useState({
        email: '',
        password: ''
    });

    // Function to handle login, setting the authentication state and user info
    const login = (userInfo) => {
        setIsAuthenticated(true);
        setUser(userInfo);
    };

    // Function to handle logout, resetting the authentication state and user info
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setRegistrationDetails({ email: '', password: '' }); // Reset registration details on logout
    };

    // Provide the authentication state and functions to the context
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, registrationDetails, setRegistrationDetails }}>
            {children}
        </AuthContext.Provider>
    );
};
