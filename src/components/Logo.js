import React from "react";
import logo from "../assets/icons/logo.svg";

function Logo() {
    return(
        <>
            <a href="#" className="logo">
                <img src={logo} alt="logo"/>
            </a>
        </>
    );
}

export default Logo;