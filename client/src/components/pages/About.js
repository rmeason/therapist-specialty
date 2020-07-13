import React from 'react';
import depression from "./img/depression_pic.jpg";
import "./About.css";

const About = () => (

    <div class="about-the-author">
    <h3 class="author-title">About the Site</h3>
    <div class="row">
        <div class="small-12 medium-4 columns">
        <div class="author-image">
            <img src={depression} />
        </div>
        </div>
        <div class="small-12 medium-8 columns">
        <h4 class="separator-left">Our Mission</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.</p>
        </div>
    </div>
    </div>



);

export default About;