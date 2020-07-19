import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import "./TopBar.css";

function TopBar(props) {

    return (
        <div data-sticky-container>
            <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
                <div className="top-bar topbar-sticky-shrink">
                    <div className="top-bar-title">
                    <h3>"Therapist-Specialty-Site"</h3>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><Link className="link" id="signUp" to="/providerSignUp">Provider Sign-Up Page</Link></li>
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
        </div>
    );
}

export default TopBar;