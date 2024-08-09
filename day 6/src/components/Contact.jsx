import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us.</p>
            
            <section className="contact-details">
                <h2>Our Office</h2>
                <p>123 Corporate Lane, Business City, India</p>
                <p>Phone: (+91)782-456-7890</p>
                <p>Email: contact@corporate.com</p>
                <div className="map">
                    <iframe 
                        title="office-location" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3015517521!2d72.74110082695312!3d19.082197838274896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61d8b2edfa7%3A0xf5f0b7a828a7e303!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1690682073651!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </section>
            
            <section className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn contact-btn">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
