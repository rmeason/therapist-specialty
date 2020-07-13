import React from 'react';
import "./Footer.css";

function Footer(props) {

    return (
        <footer class="marketing-site-footer" id="footer">
            <div class="row medium-unstack">
                <div class="medium-4 columns">
                <h4 class="marketing-site-footer-name">Yeti Snowcone</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
                <ul class="menu marketing-site-footer-menu-social simple">
                    <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                </ul>
                </div>
                <div class="medium-4 columns">
                <h4 class="marketing-site-footer-title">Contact Info</h4>
                <div class="marketing-site-footer-block">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>100 W Rincon<br />San Francisco, CA 94015</p>
                </div>
                <div class="marketing-site-footer-block">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>1 (800) 555-5555</p>
                </div>
                <div class="marketing-site-footer-block">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <p>yetirules@fakeemail.com</p>
                </div>
                </div>
            </div>
            <div class="marketing-site-footer-bottom">
                <div class="row large-unstack align-middle">
                <div class="column">
                    <p>&copy; 2020 All rights reserved</p>
                </div>
                <div class="column">
                    <ul class="menu marketing-site-footer-bottom-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>


    );

}

export default Footer;