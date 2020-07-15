import React from "react";
import "./SearchWrapper.css";

function SearchWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default SearchWrapper;
