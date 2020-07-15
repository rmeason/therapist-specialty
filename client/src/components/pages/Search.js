import React from 'react';
import SearchBtn from "../SearchBtn"
import ProfileCard from "../ProfileCard"

import "./Search.css"

const Search = () => (

    <div>
    
        <SearchBtn />

        <section class="four-up-feature">
            <div class="row four-up-feature-header align-center">
                <div class="medium-8 columns">
                <h2>Your Local Providers</h2>
                <h5> Below is a list of providers in your area who specialize in the symptoms you display:</h5>
                </div>
            </div>
            <div class="row align-spaced">
                <div class="small-10 medium-3 columns">
                
                    <ProfileCard />
                
                </div>
                <div class="small-10 medium-3 columns">
                
                    <ProfileCard />
                
                </div>
                <div class="small-10 medium-3 columns">
                
                    <ProfileCard />
                
                </div>
                <div class="small-10 medium-3 columns">

                    <ProfileCard />

                </div>
            </div>
        </section>



    </div>

);

export default Search;