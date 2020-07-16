import React, { useState, useEffect } from 'react';
import SearchBtn from "../SearchBtn";
import ProfileCard from "../ProfileCard";
import Providers from "./Providers.json";
import SearchWrapper from "../SearchWrapper";
import ProviderQuiz from "../providerQuiz";

import ReactDOM from "react-dom";
import {
  useLocation, useParams
} from "react-router-dom";

// react router dom

// import API from "../../utils/API";

import "./Search.css"



function Search() {


    const [state, setState] = useState(Providers);


    // const [providers, setProviders] = useState([])

    // useEffect(() => {
    //   loadProviders
    // }, [])


    // function loadProviders() {
    //   API.getProviders()
    //     .then(res => 
    //       setProviders(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
      let location = useLocation();
useEffect(() =>

{     let personScoresArray = [];


      let likertArray = location.search.split("=");



      for (let i = 1; i < likertArray.length; i++) {
      console.log(likertArray[i].charAt(0))    
             personScoresArray.push(likertArray[i].charAt(0));
      }
      console.log(personScoresArray);

      setState(ProviderQuiz(Providers, personScoresArray));

      console.log(ProviderQuiz(Providers, personScoresArray));
},[])
      




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

