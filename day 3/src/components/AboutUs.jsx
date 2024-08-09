import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>We are a premier event management company dedicated to creating unforgettable experiences. 
                Our expert team excels in planning and executing a wide range of events, 
                from corporate meetings to grand celebrations. We combine creativity, precision, 
                and exceptional service to bring your vision to life. Trust us to make your event 
                extraordinary.</p>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to deliver the best services to our clients and ensure their satisfaction through our expertise and dedication.</p>
                <img src="https://media.licdn.com/dms/image/C5612AQGF8uTTfyXSTQ/article-cover_image-shrink_720_1280/0/1551122610783?e=2147483647&v=beta&t=ojQ3vgGFqHPwxUiDbNoXTa-bCEJW4WavsZqezLYEtKw" width={300} alt="Our mission" />
            </section>
            <section className="team">
                <h2>Meet the Team</h2>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150?text=John+Doe" alt="John Doe" />
                    <div className="member-info">
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150?text=Jane+Smith" alt="Jane Smith" />
                    <div className="member-info">
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150?text=Emily+Johnson" alt="Emily Johnson" />
                    <div className="member-info">
                        <h3>Emily Johnson</h3>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
