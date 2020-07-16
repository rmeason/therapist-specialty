import React from "react";
import "./SearchBtn.css";

function SearchBtn(props) {

    return (

        <div class="input-group input-group-rounded">
            <input class="input-group-field" type="search"  {...props} />
        <div class="input-group-button">
            <input type="submit" class="button secondary" value="Search" />
        </div>
        </div>

    );
}

export default SearchBtn;