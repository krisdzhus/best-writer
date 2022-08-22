import React from "react";
import "../assets/content.css"
import bookCover from "../assets/img/atomic_ones.png"
import darkLight from "../assets/img/book.png"
import author from "../assets/img/author.jpeg"
import qr from "../assets/img/qr.svg"
import amazenCorp from "../assets/img/amazen_corp.svg"
import meganBooks from "../assets/img/megan_books.svg"
import megank from "../assets/img/megank.svg"
import urbanStore from "../assets/img/urban_store.svg"
import teaAndBook from "../assets/img/tea_and_book.png"
import articleOne from "../assets/img/article_pic_1.png"
import articleTwo from "../assets/img/article_pic_2.png"
import articleThree from "../assets/img/article_pic_3.png"
 
function Content() {
    return(
        <main>
            <section id="author_book">
                <div className="container">
                <h2>The Author’s Book</h2>
                <div className="yellow_line"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="author_book_card">
                                <div className="author_book_card_img">
                                    <img src={bookCover} alt="book_cover" width="100%"/>
                                </div>
                                <div className="autor_book_card_info">
                                    <h3>Atomic One’s</h3>
                                    <p className="autor_book_card_price">$ 13.84 USD</p>
                                    <p className="main_text">As the book contains theoretical content as well as solved questions.</p>
                                    <p className="autor_book_card_print">Printed Book</p>
                                    <button className="transparent_btn">Order Now</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="author_book_card">
                                <div className="author_book_card_img">
                                    <img className="author_book_card_img" src={darkLight} alt="book_cover"/>
                                </div>
                                <div className="autor_book_card_info">
                                    <h3>The Dark Light</h3>
                                    <p className="autor_book_card_price">$ 86.11 USD</p>
                                    <p className="main_text">As the book contains theoretical content as well as solved questions.</p>
                                    <p className="autor_book_card_print">Printed Book</p>
                                    <button className="transparent_btn">Order Now</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 Start */}
            <section id="about_author">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="author_img">
                                <img src={author} alt="author"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>About the Author</h2>
                            <div className="yellow_line"></div>
                            <p className="main_text">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
                            <ul className="author_info">
                                <li className="author_info_item">
                                    <span className="author_info_item_number">02</span> 
                                    <span className="main_text">Books Published</span>
                                </li>
                                <li className="author_info_item">
                                    <span className="author_info_item_number">4.5</span>  
                                    <span className="main_text">User Reviews</span>
                                </li>
                                <li className="author_info_item">
                                    <span className="author_info_item_number">04</span>  
                                    <span className="main_text">Best Seller Awards</span>
                                </li>
                            </ul>
                            <div className="author_contact">
                                <div className="autor_contact_img">
                                    <img src={qr} alt=""/>
                                </div>
                                <div className="author_contact_info">
                                    <h4>John Abraham , Ph.d</h4>
                                    <a className="main_text" href="mailto:johnabraham@gmail.com">Mail: johnabraham@gmail.com</a>
                                    <a className="main_text" href="tel:+21235459000">Phone: (+2) 123 545 9000</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Section 2 End  */}

            {/* Section 3 Start */}
            <section id="trusted_by">
                <div className="container">
                    <h2>Trusted By The Best</h2>
                    <div className="yellow_line"></div>
                    <div className="row">
                        <div className="book_store_card col-md-3">
                            <div className="book_store_card_img">
                                <img src={amazenCorp} alt="card_img"/>
                            </div>
                            <div className="book_store_card_info">
                                <p className="book_store_card_info_header">Amazen Corp.</p>  
                                <p className="main_text center">They has been helping readers, music lovers, and videophiles find quality material.</p>
                            </div>
                        </div>
                        <div className="book_store_card col-md-3">
                            <div className="book_store_card_img">
                                <img src={meganBooks} alt="card_img"/>
                            </div>
                            <div className="book_store_card_info">
                                <p className="book_store_card_info_header">Megan Books</p>  
                                <p className="main_text center">We help physical bookstores manage their overstock to the book inventory.</p>
                            </div>
                        </div>
                        <div className="book_store_card col-md-3">
                            <div className="book_store_card_img">
                                <img src={megank} alt="card_img"/>
                            </div>
                            <div className="book_store_card_info">
                                <p className="book_store_card_info_header">Megank</p>  
                                <p className="main_text center">Bookstore serving up the full spectrum of Black literature and wine black books.</p>
                            </div>
                        </div>
                        <div className="book_store_card col-md-3">
                            <div className="book_store_card_img">
                                <img src={urbanStore} alt="card_img"/>
                            </div>
                            <div className="book_store_card_info">
                                <p className="book_store_card_info_header">Urban Store</p>  
                                <p className="main_text center">We also carry the latest records, issues of all of your favorite comic books.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 End */}

            {/* Section 4 Start */}
            <section id="promo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="promo_text">
                                <h2 className="white_text left_text">Get Book Copy Today!</h2>
                                <div className="yellow_line"></div>
                                <div className="yellow line"></div>
                                <p className="main_text">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
                                <button className="transparent_btn white_text ">Order Today</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={teaAndBook} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4 End */}

            {/* Section 5 Start */}
            <section id="articles">
                <div className="container">
                    <h2>Articles & Resources</h2>
                    <div className="yellow_line"></div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="article_card">
                                <div className="article_card_img">
                                    <img src={articleOne} alt=""/>
                                </div>
                                <div className="article_card_info">
                                    <p className="article_card_info_text">Significant reading has more info number</p>
                                    <p className="main_text">Override the digital divide with additional clickthroughs from DevOps for real-time schemas.</p>
                                    <div className="article_card_footer">
                                        <a className="article_card_read_more" href="#">Readmore</a>
                                        <p className="article_card_date">October 6, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="article_card">
                                <div className="article_card_img">
                                    <img src={articleTwo} alt=""/>
                                </div>
                                <div className="article_card_info">
                                    <p className="article_card_info_text">Many variations of pass majority have suffered</p>
                                    <p className="main_text">Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.</p>
                                    <div className="article_card_footer">
                                        <a className="article_card_read_more" href="#">Readmore</a>
                                        <p className="article_card_date">October 6, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="article_card">
                                <div className="article_card_img">
                                    <img src={articleThree} alt=""/>
                                </div>
                                <div className="article_card_info">
                                    <p className="article_card_info_text">Words which don’t look even slightly believable</p>
                                    <p className="main_text">Podcasting operational change management inside of workflows to establish a framework.</p>
                                    <div className="article_card_footer">
                                        <a className="article_card_read_more" href="#">Readmore</a>
                                        <p className="article_card_date">October 6, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 5 End */}

            {/* Section 6 Start */}
            <section id="subscribtion">
                <div className="container">
                    <div className="subscribtion">
                        <h2>Get The Best Updates</h2>
                        <div className="blue_line"></div>
                        <p className="subscribtion_text">Subscribe with your mail id to know the current update in book edition at your fingertip with in a minute.</p>
                        <form action="get">
                            <input type="email" placeholder="Your Email ID..."/>
                            <button className="blue_btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* Section 6 End */}
        </main>
    );
}

export default Content;