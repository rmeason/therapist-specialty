import React, { useState, useEffect } from 'react';
import SearchBtn from "../SearchBtn";
import ProfileCard from "../ProfileCard";
// import Providers from "./Providers.json";

import SearchWrapper from "../SearchWrapper";
import ProviderQuiz from "../providerQuiz";

import API from "../../utils/API";

import ReactDOM from "react-dom";
import { useLocation, useParams } from "react-router-dom";

// react router dom


import "./Search.css"



function Search() {


    const [state, setState] = useState([]);


      let location = useLocation();
      
    useEffect(() =>

        

        {  
              loadProviders()

              
        },[])
      

    function loadProviders() {
      API.getProviders()
        .then(res => {
          let providers = (res.data);
          let personScoresArray = [];


          let likertArray = location.search.split("=");



          for (let i = 1; i < likertArray.length; i++) {
          console.log(likertArray[i].charAt(0))    
                personScoresArray.push(likertArray[i].charAt(0));
          }
          console.log(personScoresArray);

          setState(ProviderQuiz(providers, personScoresArray));

          console.log(ProviderQuiz(providers, personScoresArray));
        }
        )
        .catch(err => console.log(err));
    };




        return (
<SearchWrapper>
<SearchBtn />
{state.map(Providers => (
  <ProfileCard
    id={Providers.id}
    key={Providers.id}
    image={Providers.image}
    name={Providers.name}
    specialties={Providers.specialties}
    contact={Providers.contact}
    location={Providers.location}
  />
))}
</SearchWrapper>
        );
      }



export default Search;
