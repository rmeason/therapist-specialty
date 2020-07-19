import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import "./TopBar.css";

function TopBar(props) {

    return (
        <div data-sticky-container>
            <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
                <div class="top-bar topbar-sticky-shrink">
                    <div class="top-bar-title">
                    <h3>"Therapist-Specialty-Site"</h3>
                    </div>
                    <div class="top-bar-right">
                        <ul class="menu">
                            <li><Link class="link" id="signUp" to="/providerSignUp">Provider Sign-Up Page</Link></li>
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
        </div>
    );
}

export default TopBar;