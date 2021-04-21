/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './style.css';

export default function Contact() {
    return (
        <section className="contact-me" id="connect">
            <h2 className="section-title mt-5 text-center">
                Connect with Me!
            </h2>
            <hr />
            <div id="contact-details" className="text-center pt-3 pb-4">
                <a href="#home" className="d-block bg-accent h4">Emily B. Todt</a>
                <a href="tel:+14343903523" className="d-block bg-accent h4">+1 (434) 390-3523</a>
                <a href="mailto:emilybtodt@gmail.com" className="d-block bg-accent h4">emilybtodt@gmail.com</a>
                <hr />
                <h3 className="mb-3">Follow me on GitHub and LinkedIn</h3>
                <div id="social-icons" className="justify-content-center">
                    <a href="https://github.com/todtsies" className="bg-accent" target="_blank">
                        <i className="fab fa-github h2 mr-3 mb-0"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/emily-todt/" className="bg-accent" target="_blank">
                        <i className="fab fa-linkedin h2 mr-3 mb-0"></i>
                    </a>
                </div>
            </div>
        </section>

    );
}