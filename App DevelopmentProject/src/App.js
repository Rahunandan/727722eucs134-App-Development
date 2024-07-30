// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Events from './components/Events';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminHomepage from './components/AdminHomepage'; // Import the AdminHomepage component
import EventCustomizationPage from './components/EventCustomizationPage'; // Import the EventCustomizationPage component
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin-homepage" element={<AdminHomepage />} /> {/* Add route for admin homepage */}
                    <Route path="/events/customize/:id" element={<EventCustomizationPage />} /> {/* Add route for event customization page */}
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
