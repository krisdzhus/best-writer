import React from "react";
import facebook from "../assets/icons/footer_facebook.svg";
import twitter from "../assets/icons/footer_twitter.svg";
import linkedin from "../assets/icons/footer_linkedin.svg";
import instagram from "../assets/icons/footer_instagram.svg";
import Logo from "./Logo";
import "../assets/footer.css"

function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="footer_inner">
                    <div className="row">
                        <div className="col-md-3">
                            <Logo/>
                            <div className="footer_socials">
                                <a href="#" className="social_icon">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                                <a href="#" className="social_icon">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a href="#" className="social_icon">
                                    <img src={linkedin} alt="linkedin"/>
                                </a>
                                <a href="#" className="social_icon">
                                    <img src={instagram} alt="instagram"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="explore">
                                <h3>Explore</h3>
                                <ul className="explore_nav">
                                    <li className="footer_items">Home</li>
                                    <li className="footer_items">About</li>
                                    <li className="footer_items">Articles</li>
                                    <li className="footer_items">Our Store</li>
                                    <li className="footer_items">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="pages">
                                <h3>Utility Pages</h3>
                                <ul className="pages_nav">
                                    <li className="footer_items">Style Guide</li>
                                    <li className="footer_items">404 Not Found</li>
                                    <li className="footer_items">Password Protected</li>
                                    <li className="footer_items">Licenses</li>
                                    <li className="footer_items">Changelog</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact">
                                <h3>Keep in Touch</h3>
                                <ul className="contact_list">
                                    <li className="contacts_listitem">
                                        <span className="contacts_link-title">Address :</span>
                                        <span className="contacts_link-text">24A Kingston St, Los Vegas NC 28202, USA.</span>    
                                    </li>      
                                    <li className="contacts_listitem">
                                        <span className="contacts_link-title">Mail :</span>
                                        <a href="mailto:support@pages.com" className="contacts_link-text">support@pages.com</a> 
                                    </li>
                                    <li className="contacts_listitem">
                                        <span className="contacts_link-title">Phone :</span>
                                        <a href="tel:(+22)1234567900" className="contacts_link-text">(+22) 123 - 4567 - 900</a> 
                                    </li>                              
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_outer">
                    <div className="copyright">&#169; Drafted by VictorFlow - Powered by Webflow</div>
                </div>

            </div>
        
        </footer>
    );
}

export default Footer;