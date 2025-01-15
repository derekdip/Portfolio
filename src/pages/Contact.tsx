import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, feel free to reach out to us!</p>

      <div className="contact-info">
        <h2>Support Email</h2>
        <p>
          <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>
        </p>
        
        <h2>Social Media</h2>
        <p>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
