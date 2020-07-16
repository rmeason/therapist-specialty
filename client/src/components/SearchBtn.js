import React from "react";
import "./SearchBtn.css";

function SearchBtn(props) {

    return (

        <div className="input-group input-group-rounded">
            
            <input 
            value={props.search}
            onChange={props.handleInputChange}
            className="input-group-field" 
            type="search"  
            {...props} 
            />
        
        <div className="input-group-button">
        <datalist id="Provider">
          {props.Providers.map(Provider => (
            <option value={Provider} key={Provider} />
          ))}
        </datalist>
            <input 
            type="submit" 
            onClick={props.handleFormSubmit}
            className="button secondary" 
            value="Search" 
            />
        
        </div>
        </div>

    );
}

export default SearchBtn;