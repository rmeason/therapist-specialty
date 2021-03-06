import React from 'react';
import depression from "./img/depression_pic.jpg";
import "./About.css";

const About = () => (

    <div class="about-the-author">
    <h3 class="author-title">About the Site</h3>
    <div class="row">
        <div class="small-12 medium-4 columns">
        <div class="author-image">
            <img src={depression} alt="depression" />
        </div>
        </div>
        <div class="small-12 medium-8 columns">
        <h4 class="separator-left">Our Mission</h4>
        <h5>To those searching for a therapist:</h5>
        <p>This site is meant to help those who are struggling with life at the moment, or simply need to find someone to talk to.</p>
        <p>We invite you to take the survey on our "Mental Health Quiz" page. There you will be able to learn a little more about how you are feeling, and what you and your potential therapist need to focus on.</p>
        <br />
        <br />
        <h4>Providers:</h4>
        <p>To the providers visiting this page, we invite you to fill out the form on the "Provider Sign-Up Page" and add yourself to our growing database.</p>
        </div>
    </div>
    </div>



);

export default About;