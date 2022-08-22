import React from "react";
import Logo from "./Logo";
import "../assets/header.css";
import Nav from "./Nav";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import basket from "../assets/icons/basket.svg";
import bookPic from "../assets/img/book.png"


function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="row">
                        <div className="col-md-2">
                            <Logo/>
                        </div>
                        <div className="col-md-2">
                            <div className="socials">
                                <a href="#" className="social_icon">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                                <a href="#" className="social_icon">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a href="#" className="social_icon">
                                    <img src={linkedin} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
        
        
                        <div className="col-md-4 offset-md-1">
                            <Nav/>
                        </div>
        
        
                        <div className="col-md-3">
                            <ul className="header_order">
                                <li>
                                    <button className="order_menu_basket">
                                        <img src={basket} alt="basket"/>
                                    </button>
                                </li>
                                <li>
                                    <button className="yellow_btn">Order Today</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>           
            </div>
            <div className="header_outer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p><span className="text">Welcome to Pages!!!</span></p>
                            <h1>Your Books From The Best Writer.</h1>
                            <p className="main_text white_text">We believe that reading books are essential to a healthy culture.
                                <br/>
                                They’re where authors can connect with readers.
                            </p>

                            <button className="yellow_btn">Order Today</button>
                            <a href="#" className="demo_link">Read Free Demo</a>
                            <ul className="about_book">
                                <li>
                                    Pages: <span class="about_book_info">250pages</span>
                                </li>
                                <li>
                                    Length: <span class="about_book_info">10 Hours</span>
                                </li>
                                <li>
                                    Rating: <span class="about_book_info">4.5/5 (305 ratings)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div className="header_outer_img">
                                <img className="book_pic" src={bookPic} alt="The Dark Light"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;