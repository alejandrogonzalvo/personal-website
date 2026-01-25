import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import './ContactList.css'; // Import dedicated CSS

const ContactList = () => {
    const links = [
        {
            icon: <FaGithub size={32} />,
            text: "alejandrogonzalvo",
            href: "https://github.com/alejandrogonzalvo",
            label: "GitHub"
        },
        {
            icon: <FaEnvelope size={32} />,
            text: "alejandro@gonzalvo.dev",
            href: "mailto:alejandro@gonzalvo.dev",
            label: "Email"
        },
        {
            icon: <FaLinkedin size={32} />,
            text: "Alejandro Gonzalvo",
            href: "https://linkedin.com/in/alejandrogonzalvo",
            label: "LinkedIn"
        },
        {
            icon: <FaInstagram size={32} />,
            text: "alejandro_gonzalvo",
            href: "https://instagram.com/alejandro_gonzalvo",
            label: "Instagram"
        }
    ];

    return (
        <div className="contact-list">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target={link.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="contact-item"
                    aria-label={link.label}
                >
                    <span className="icon">{link.icon}</span>
                    <span className="text">{link.text}</span>
                </a>
            ))}
        </div>
    );
};

export default ContactList;
