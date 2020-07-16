import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import "./Footer.css";

function Footer(props) {

    return (
        <footer class="marketing-site-footer" id="footer">
            <div class="row medium-unstack">
            <div class="medium-4 columns">
                <h4 class="marketing-site-footer-title">Crisis Lines</h4>

                <div class="marketing-site-footer-block">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>Immediate Emergency:
                    <a href="tel:911" class="911-number num">  911</a>
                    </p>
                </div>
                
                <div class="marketing-site-footer-block">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>Suicide Prevention Life Line:
                    <a href="tel:1-800-273-8255" class="suicide-number num">  1-800-273-8255</a>
                    </p>
                </div>

                </div>
                <div class="medium-4 columns">
                <h4 class="marketing-site-footer-name">Disclaimer</h4>
                <p>These quizzes (as well as peer-reviewed mental-health scales) should not be viewed as or replace the opinion of a professional, and does not act as a diagnosis.</p>
                <p>This should only be viewed as a starting point to better unerstand yourself and the recources that can help you.</p>
                <ul class="menu marketing-site-footer-menu-social simple">
                    <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                </ul>
                </div>
            </div>
            <div class="marketing-site-footer-bottom">
                <div class="row large-unstack align-middle">
                <div class="column">
                    <p>&copy; 2020 All rights reserved</p>
                </div>
                <div class="column">
                    <ul class="menu marketing-site-footer-bottom-links">
                    <li><Link class="link" to="/">Mental Health Quiz</Link></li>
                            <li><Link class="link" to="/about">About the Site</Link></li>
                            <li><Link class="link" to="/search">Search Providers</Link></li>
                            <li>
                                <LoginButton />
                            </li>
                            <li>
                                <LogoutButton />
                            </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>


    );

}

export default Footer;