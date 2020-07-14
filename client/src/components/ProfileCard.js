import React from 'react';

import "./ProfileCard.css";

function ProfileCard(props) {

    return (


        <div class="card-user-container">


        <div class="card-user-avatar">
            <img src="https://placehold.it/200x200" alt="" class="user-image" />
        </div>


        <div class="card-user-social">
            <ul class="menu">
            <li class="fa fa-twitter"></li>
            <li class="fa fa-dribbble"></li>
            <li class="fa fa-instagram"></li>
            <li class="fa fa-github"></li>
            </ul>
        </div>


        <div class="card-user-bio">
            <h4>User Name</h4>
            <p>UX/UI ,Front-end developer, Foundation interested. </p>
            <span class="location"><span class="location-icon fa fa-map-marker"></span><span class="location-text">Makkah Al-Mukaramah</span></span>
        </div>



        <div class="card-user-button">
            <a href="#" class="hollow button">FOLLOW</a>
        </div>
        </div>

    );
}

export default ProfileCard;