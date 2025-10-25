import React from 'react';
import '../../styles/header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-with-video">
      {/* Background Video */}
      <div className="header-video-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="header-video"
        >
          <source src="/videos/header-background.mp4" type="video/mp4" />
          <source src="/videos/header-background.webm" type="video/webm" />
          {/* Fallback image */}
          <img
            src="/assets/images/slide3.jpg"
            alt="Header Background"
            className="header-fallback-img"
          />
        </video>

        {/* Overlay */}
        <div className="header-video-overlay"></div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <img
          src="/images/logo.png"
          className="logo"
          alt="RK Construcciones Logo"
        />

        <section>
          <span><i className="fa fa-envelope"></i></span>
          <span>
            <p>MAIL US:</p>
            <b>support@rkconstucciones.com</b>
          </span>
        </section>

        <section>
          <span><i className="fa fa-phone"></i></span>
          <span>
            <p>CONTACT US:</p>
            <b>+xxx-xxxx-xxxxx</b>
          </span>
        </section>

        <section>
          <ul>
            <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
