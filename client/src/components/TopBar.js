import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton"

import "./TopBar.css";

function TopBar(props) {

    return (
        <div data-sticky-container>
            <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
                <div class="top-bar topbar-sticky-shrink">
                    <div class="top-bar-title">
                    <h3>"Therarpist-Specialty-Site"</h3>
                    </div>
                    <div class="top-bar-right">
                        <ul class="menu">
                            <li><Link to="/">Thing 1</Link></li>
                            <li><Link to="/about">Thing 2</Link></li>
                            <li><Link to="/search">Thing 3</Link></li>
                            <li>
                                <LoginButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;