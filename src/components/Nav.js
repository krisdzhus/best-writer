import React from "react";
import {NavLink} from "react-router-dom"
import "../assets/header.css"

const NAV_LINK = [
    {name:"Home", to:"/"},
    {name:"About", to:"#author_book"},
    {name:"Author", to:"#about_author"},
    {name:"Articles", to:"#articles"}
]



function Nav() {
    return(
        <nav className="navigation">
            <ul className="menu">
            {NAV_LINK.map((link) => (
                <li key={link.name} className="menu_item">
                    <NavLink to={link.to} className="menu_link">{link.name}</NavLink>
                </li>
            )
            )}
            </ul>
        </nav>
    );
}

export default Nav;