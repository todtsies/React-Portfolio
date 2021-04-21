import React from 'react';
import ProfilePic from '../..assets/picOfMe.jpg';

import './style.css';

function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section-title section-title-intro">
                Hi, I'm <strong>Emily Todt</strong>
            </h1>
            <p className="section-subtitle section-subtitle-intro">Full Stack Developer</p>
            <img src={ProfilePic} alt="me smiling" className="intro-image" />
        </section>
    );
}

export default Intro;