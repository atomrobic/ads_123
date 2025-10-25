import React, { useState } from 'react';
import '../../styles/auth.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message (you can replace this with a toast/notification)
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: '📍',
      text: 'New York, NY 10001',
      subtext: 'United States'
    },
    {
      icon: '📞',
      text: '(212) 555-2368',
      link: 'tel:1-212-555-5555'
    },
    {
      icon: '✉️',
      text: 'hello@example.com',
      link: 'mailto:hello@example.com'
    }
  ];

  const socialMedia = [
    {
      icon: '🐙',
      name: 'GitHub',
      url: '#',
      color: '#333'
    },
    {
      icon: '💻',
      name: 'CodePen',
      url: '#',
      color: '#000'
    },
    {
      icon: '🐦',
      name: 'Twitter',
      url: '#',
      color: '#1DA1F2'
    },
    {
      icon: '📷',
      name: 'Instagram',
      url: '#',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1 className="section-header">Get In Touch</h1>
        <p className="section-subtitle">Let's start a conversation and create something amazing together</p>
        
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder=" "
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form-label">Full Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder=" "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>

              <div className="form-group">
                <textarea
                  className="form-input textarea"
                  rows="5"
                  placeholder=" "
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message" className="form-label">Your Message</label>
              </div>

              <button type="submit" className="send-button">
                <span className="send-text">Send Message</span>
                <span className="send-icon">🚀</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                Have a project in mind? Reach out and let's discuss how we can bring your ideas to life.
              </p>

              <ul className="contact-list">
                {contactInfo.map((item, index) => (
                  <li key={index} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-details">
                      {item.link ? (
                        <a href={item.link} className="contact-link">
                          {item.text}
                        </a>
                      ) : (
                        <span className="contact-text">{item.text}</span>
                      )}
                      {item.subtext && (
                        <span className="contact-subtext">{item.subtext}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-media-grid">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-item"
                      style={{ '--social-color': social.color }}
                      aria-label={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="business-hours">
                <h4 className="hours-title">Business Hours</h4>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Mon - Fri</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="copyright">
                © {new Date().getFullYear()} All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;