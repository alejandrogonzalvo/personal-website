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

        <ul className="contact-list">
            {links.map((link, index) => (
                <li key={index} className="contact-item-li">
                    <a
                        href={link.href}
                        target={link.label === "Email" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="contact-link"
                        aria-label={link.label}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="icon-container">
                            {link.icon}
                        </span>
                        <span className="text">{link.text}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

};

export default ContactList;
