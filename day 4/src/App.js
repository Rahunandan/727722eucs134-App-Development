import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Events from './components/Events';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminHomepage from './components/AdminHomepage';
import EventCustomizationPage from './components/EventCustomizationPage';
import { AuthProvider } from './AuthContext';
import Profile from './components/Profile';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <ConditionalNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin-homepage" element={<AdminHomepage />} />
                    <Route path="/events/customize/:id" element={<EventCustomizationPage />} />
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
                <ConditionalFooter />
            </Router>
        </AuthProvider>
    );
};

const ConditionalNavbar = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    if (isAdminRoute) {
        return null;
    }

    return <Navbar />;
};

const ConditionalFooter = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    if (isAdminRoute) {
        return null;
    }

    return <Footer />;
};

export default App;
