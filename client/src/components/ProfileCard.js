import React from 'react';

// import BImg from "./pages/img/Bear.jpg";

import "./ProfileCard.css";

function ProfileCard(props) {

    return (


        <div class="card-user-container">


        <div class="card-user-avatar">
            <img src={props.image} alt={props.name} class="user-image" />
        </div>


        {/* src={BImg} alt="Pooh"
        src={props.image} alt={props.name} */}


        {/* <div class="card-user-social">
            <ul class="menu">
            <li class="fa fa-twitter"></li>
            <li class="fa fa-dribbble"></li>
            <li class="fa fa-instagram"></li>
            <li class="fa fa-github"></li>
            </ul>
        </div> */}


        <div class="card-user-bio">
            <h4>{props.name}</h4>
            <p>{props.specialties}</p>
        <span class="location"><span class="location-icon fa fa-map-marker"></span><span class="location-text">{props.location}</span></span>
            <br />
            <p>
               {props.contact}
            </p>
        </div>


        <div class="card-user-button">
            <a href={props.psychology} class="hollow button" target="_blank">Psychology Today <br /> <br /> Profile</a>
        </div>
        </div>

    );
}

export default ProfileCard;