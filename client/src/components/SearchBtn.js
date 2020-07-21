import React from "react";
import "./SearchBtn.css";

function SearchBtn(props) {

    
    
    
    return (

        <div className="input-group input-group-rounded">
            
            {/* <input 
            value={props.search}
            onChange={props.handleInputChange}
            className="input-group-field" 
            type="search"  
            {...props} 
            /> */}

        {/* <div className="input-group-button">


            <input 
            type="submit" 
            onClick={props.handleFormSubmit}
            className="button secondary" 
            value="Search" 

            /> */}
{/* 
        </div> */}

        <h4 id="list">Below is a list of providers in decending order (left to right) based on how closely they match with your answers in the "Mental Health Quiz":</h4>
        </div>

    );

}


export default SearchBtn;


// {providerss.length ? (
// <List>
// {providers.map(provider => {
//   return (
//     <ListItem key={provider._id}>
//       <a href={"/providers/" + provider._id}>
//         <strong>
//           {provider.title} by {provider.author}
//         </strong>
//       </a>
//     </ListItem>
//   );
// })}
// </List>
// );