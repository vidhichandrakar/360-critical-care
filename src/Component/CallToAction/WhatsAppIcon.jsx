// WhatsAppIcon.jsx
import React from 'react';
import './WhatsAppIcon.css'; // Make sure to import the CSS

const WhatsAppIcon = () => {
    return (
        <a href="https://wa.me/YOUR_PHONE_NUMBER" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="Chat with us on WhatsApp" />
        </a>
    );
};

export default WhatsAppIcon;