import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import "./Footer.css";

function Footer(props) {

    return (
        <footer className="marketing-site-footer" id="footer">
            <div className="row medium-unstack">
            <div className="medium-4 columns">
                <h4 className="marketing-site-footer-title">Crisis Lines</h4>

                <div className="marketing-site-footer-block">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>Immediate Emergency:
                    <a href="tel:911" className="911-number num">  911</a>
                    </p>
                </div>
                
                <div className="marketing-site-footer-block">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>Suicide Prevention Life Line:
                    <a href="tel:1-800-273-8255" className="suicide-number num">  1-800-273-8255</a>
                    </p>
                </div>

                </div>
                <div className="medium-4 columns">
                <h4 className="marketing-site-footer-name">Disclaimer</h4>
                <p>These quizzes (as well as peer-reviewed mental-health scales) should not be viewed as or replace the opinion of a professional, and does not act as a diagnosis.</p>
                <p>This should only be viewed as a starting point to better unerstand yourself and the recources that can help you.</p>
                <ul className="menu marketing-site-footer-menu-social simple">
                    <li><a href="#"><i className="fas fa-youtube" aria-hidden="true"></i></a></li>
                    {/* <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li> */}
                </ul>
                </div>
            </div>
            <div className="marketing-site-footer-bottom">
                <div className="row large-unstack align-middle">
                <div className="column">
                    <p>&copy; 2020 All rights reserved</p>
                </div>
                <div className="column">
                    <ul className="menu marketing-site-footer-bottom-links">
                    <li><Link className="link" to="/">Mental Health Quiz</Link></li>
                            <li><Link className="link" to="/about">About the Site</Link></li>
                            <li><Link className="link" to="/search">Search Providers</Link></li>
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