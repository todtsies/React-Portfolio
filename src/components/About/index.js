import React from 'react';
import resume from '../..assets/Resume.pdf'

import './style.css';


function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section-title section-title-about text-center">About Me</h2>
            <p className="section-subtitle section-subtitle-about">Designer and developer based in central Virginia</p>

            <div className="about-me-body">
                <p>Growing up in central Virginia, I was able to experience many different professions. I've been a
                substitute teacher, fast-food worker, insurance sales agent, waitress, and am currently a kennel
                technician at a doggie daycare. Due to quarantine, I spent many months trying to figure out what I
                wanted out of life. Because I graduated from high school with my Associate's degree, this left me forced
                to choose a major my first semester in college. I was lucky enough to attend Virginia Tech, but quickly
                realized I was wasting thousands of dollars by not fully knowing what I wanted to study while I was
                there.</p>
                <p>My mom was the one that introduced me to the tech world. I had been out of school for a couple years
                working dead-end jobs when she mentioned web development as a new profession idea. Being as I had never
                coded before, I looked up what would make a good software developer. After looking up those qualities, I
                realized this may be something I could enjoy! Boy, was I right! Since starting this bootcamp last
                November, I have absolutley fallen in love with conceptualizing, designing, and developing different
                software applications. Watching my creativity come to life gives me reassurance that I'm exactly where I
                need to be.</p>
            </div>

            <p>
                <a href={resume} className="resume-btn btn text-center">
                    <i className="fa fa-download"></i>
                Download Resume
            </a>
            </p>
        </section>
    );
}

export default About;