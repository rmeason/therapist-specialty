import React from "react";
import loading from "./img/newLoadingGif.gif";
import "./Loading.css";

const Loading = () => (
    <div id="loading" >
        <img src={loading} />
    </div>
);

export default Loading;